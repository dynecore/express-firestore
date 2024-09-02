console.info('Iniciando servidor...')

const express = require('express')
const morgan = require('morgan')
require('./firebase/firebaseConn.js')

const app = express()

app.get('/', (req, res) => {
  const jsobject = { dato: 'Hello World', time: Date.now() }
  res.send(jsobject)
})

app.use(morgan('dev'))

module.exports = app
