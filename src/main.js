console.info('Iniciando servidor...')

require('./firebase/init')
const express = require('express')
const morgan = require('morgan')
require('./firebase/firestore.js')
require('./firebase/auth')

const app = express()

app.get('/', (req, res) => {
  const jsobject = { dato: 'Hello World', time: Date.now() }
  res.send(jsobject)
})

const storedUid = '12345'

app.get('/chkusr', (req, res) => {
  console.primary('---------get---------')
  console.log('Petición:', req.query)

  const { uid } = req.query

  if (uid === storedUid) {
    const response = { message: 'OK', status: 200 }
    console.log('Respuesta:', response)
    res.status(200).json(response)
  } else {
    const response = { message: 'Bad Request', status: 200 }
    console.log('Respuesta:', response)
    res.status(200).json(response)
  }
})

app.use(morgan('dev'))

module.exports = app
