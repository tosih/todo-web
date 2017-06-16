const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const host = process.env.APPLICATION_URL || 'localhost'
const port = 80

function logErrors (err, req, res, next) {
  console.error(err.stack)
  next(err)
}

function errorHandler (err, req, res, next) {
  res.status(500)
  res.json({ error: err })
}

app.listen(port, () => {
  var hostName = 'https://' + host + ':' + port
  console.log('Application running at: ' + hostName)
})

app.use(bodyParser.json())
app.use(logErrors)
app.use(errorHandler)

// Routes
app.use('/', express.static('public'))
