/* eslint-disable n/no-callback-literal */
// eslint-disable-next-line no-unused-vars
const { color, bgColor, style, SetColor } = require('./resources/dynemods')
const app = require('./src/main.js')
const express = require('express')
const initialPort = process.env.PORT
let port = initialPort

// Función para verificar si un puerto está disponible
function checkPortAvailability (port, callback) {
  const server = express()

  const tempServer = server.listen(port, () => {
    // Si se puede iniciar el servidor, el puerto está libre
    tempServer.close(() => callback(false))
  })

  tempServer.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      callback(true) // Puerto está en uso
    } else {
      callback(false) // Otro error
    }
  })
}

// Función para encontrar un puerto disponible
function findAvailablePort (startingPort, callback) {
  let currentPort = startingPort

  function tryPort (port) {
    checkPortAvailability(port, (inUse) => {
      if (inUse) {
        currentPort++
        tryPort(currentPort)
      } else {
        callback(port)
      }
    })
  }

  tryPort(currentPort)
}

const SuccessMessage = (port) => {
  console.primary(`Servidor escuchando en el puerto ${SetColor(color.yellow, port)}`)
  console.warning('----------')
  console.info(`local: ${SetColor(color.yellow, 'http://localhost:', port, '/')}`)
}

// eslint-disable-next-line eqeqeq
if (port == '' || port == undefined) {
// Verificar el puerto y manejar la redirección si es necesario
  console.error('El puerto del servidor no está definido.')
} else {
  checkPortAvailability(port, (inUse) => {
    if (inUse) {
      console.danger(`Puerto ${color.yellow}${port}${color.red} ya está en uso.`)
      if (process.env.ALLOW_PORT_REDIRECT === 'true') {
        console.log('Buscando un puerto disponible...')
        findAvailablePort(initialPort + 1, (availablePort) => {
          port = availablePort
          console.info(`Puerto redirigido a ${SetColor(color.yellow, port)}`)
          app.listen(port, () => {
            SuccessMessage(port)
          })
        })
      } else {
        console.error('Redirección de puerto no permitida.')
      }
    } else {
      app.listen(port, () => {
        SuccessMessage(port)
      })
    }
  })
}
