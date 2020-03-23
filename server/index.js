if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config()
}

const fs = require('fs')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const stripe = require('stripe')(process.env.STRIPE_PUBLISHABLE_KEY)
const sendGrid = require('@sendgrid/mail')

const cluster = require('cluster')
const numCPUs = require('os').cpus().length

const isDev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 5000

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`)

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`)
  })

} else {
  const app = express()

  const logger = () => {
    return (req, res, next) => {
      res.on('finish', () => {
        if (res.statusCode === 200) console.log(`${chalk.blue('[' + new Date(Date.now()).toLocaleString() + ']')} ${chalk.green("[200] ") + req.originalUrl}`)
        if (res.statusCode === 304) console.log(`${chalk.blue('[' + new Date(Date.now()).toLocaleString() + ']')} ${chalk.yellow("[304] ") + req.originalUrl}`)
        if (res.statusCode === 404) console.log(`${chalk.blue('[' + new Date(Date.now()).toLocaleString() + ']')} ${chalk.red("[404] ") + req.originalUrl}`)
        if (res.statusCode === 500) console.log(`${chalk.blue('[' + new Date(Date.now()).toLocaleString() + ']')} ${chalk.bgRed("[500]") + " " + req.originalUrl}`)
      })
      next()
    }
  }

  const requireHTTPS = (req, res, next) => {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
      return res.redirect('https://' + req.get('host') + req.url)
    }
    next()
  }

  app.use(logger())
  app.use(requireHTTPS)
  app.use(bodyParser.json())

  sendGrid.setApiKey(process.env.SENDGRID_API_KEY)

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../client/build'), {
    // Prevents router from using above line as index response
    index: false,
  }))

  app.post('/checkout', async (req, res) => {
    const clientSecret = await stripe.paymentIntents.create({
      amount: req.body.amount * 100,
      currency: 'usd',
    })

    res.send(clientSecret)
  })

  app.post('/checkout-success', (req, res) => {
    let png = req.body.receipt.split(';base64,').pop()
    const crypto = require('crypto')
    const id = crypto.randomBytes(16).toString("hex")

    const pathToAttachment = path.resolve(__dirname, `./tmp/images/${id}.png`)

    fs.writeFileSync(pathToAttachment, png, 'base64', (err) => {
      if (err) throw err
    })

    fs.readFile(pathToAttachment, 'base64', (err, img) => {
      if (err) { throw err } else {
        const msg = {
          to: process.env.AGENCY_EMAIL,
          from: "info@flatbillbaseball.com",
          subject: 'Message from Website Contact Form!',
          html: `<h1>It worked!</h1>
      <p>It better be attached down there.</p>
      `,
          attachments: [
            {
              content: img,
              filename: "CustomJerseyOrderReceipt.png",
              type: "image/png",
              disposition: "attachment"
            }
          ]
        }

        sendGrid.send(msg)
          .then(success => res.send({
            statusCode: 200,
            success: true,
            errors: {},
            data: img,
          }))
          .catch(err => console.log(err.response.body.errors))
      }

    })

    fs.unlink(pathToAttachment, (err) => {
      if (err) throw err
    })

  })

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })

  app.listen(PORT, () => {
    console.log(chalk.underline(`Node ${isDev ? 'Dev Server' : 'Cluster Worker ' + process.pid}: Listening on port ${PORT}.`))
  })
}