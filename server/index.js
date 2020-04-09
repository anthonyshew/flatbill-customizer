if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const sendGrid = require('@sendgrid/mail')
const jwt = require('jsonwebtoken')

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

  app.get('/stripe-key', (req, res) => {
    res.send({ key: process.env.STRIPE_PUBLISHABLE_KEY })
  })

  app.post('/checkout', async (req, res) => {
    const clientSecret = await stripe.paymentIntents.create({
      amount: (req.body.amount + 25) * 100,
      currency: 'usd',
    }).catch(err => console.log(err))

    res.send(clientSecret)
  })

  app.post('/checkout-success', (req, res) => {
    const token = jwt.sign(req.body, process.env.JWT_SECRET)

    const msg = {
      to: [process.env.EMAIL_TO, req.body.customer_email],
      from: "info@flatbillbaseball.com",
      subject: 'Custom Jersey Receipt - Flatbill Baseball',
      html: `<h1>Thank you for your order!</h1>
      <h2>We're reviewing your order and getting started on your jersey right now.</h2>
      <h3>To see a copy of your receipt, visit the link below:
      <a href="${process.env.DOMAIN_ROOT}/receipt/${token}">Visit your receipt.</a>
      `
    }

    sendGrid.send(msg)
      .then(success => res.send({
        statusCode: 200,
        success: true,
        errors: {},
        data: token,
      }))
      .catch(err => console.log(err.response.body.errors))
  })

  app.post('/decode-receipt', (req, res) => {
    const decoded = jwt.verify(req.body.jwt, process.env.JWT_SECRET)

    res.send({
      statusCode: 200,
      success: true,
      errors: {},
      data: decoded,
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