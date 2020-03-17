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
    const crypto = require('crypto')
    const id = crypto.randomBytes(16).toString("hex")

    const pathToAttachment = `${dirname}/${id}.pdf`
    const attachment = fs.readFileSync(pathToAttachment).toString("base64")

    const msg = {
      to: process.env.AGENCY_EMAIL,
      from: "no-reply@flatbillbaseball.com",
      subject: 'Message from Website Contact Form!',
      html: `<h1>Incoming Mail from your website!</h1>
  <h2>${name} said...</h2>
  <p>${message}</p>
  <br>
  <hr>
  <p>Reply to this message using the reply button below to send an e-mail response.</p>
  `,
      attachments: [
        {
          content: attachment,
          filename: `${id}.pdf`,
          type: "application/pdf",
          disposition: "attachment"
        }
      ]
    }

    sendGrid.send(msg).catch(err => console.log(err))

  })

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'))
  })

  app.listen(PORT, () => {
    console.log(chalk.underline(`Node ${isDev ? 'Dev Server' : 'Cluster Worker ' + process.pid}: Listening on port ${PORT}.`))
  })
}