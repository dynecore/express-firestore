/* eslint-disable no-unused-vars */
const color = {
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  lightGray: '\x1b[90m',
  lightRed: '\x1b[91m',
  lightGreen: '\x1b[92m',
  lightYellow: '\x1b[93m',
  lightBlue: '\x1b[94m',
  lightMagenta: '\x1b[95m',
  lightCyan: '\x1b[96m',
  lightWhite: '\x1b[97m'
}

const SetColor = (...args) => {
  let content = ''
  args.map(e => { content += e; return null })
  return (content + style.reset)
}

const bgColor = {
  black: '\x1b[40m',
  red: '\x1b[41m',
  green: '\x1b[42m',
  yellow: '\x1b[43m',
  blue: '\x1b[44m',
  magenta: '\x1b[45m',
  cyan: '\x1b[46m',
  white: '\x1b[47m',
  lightGray: '\x1b[100m',
  lightRed: '\x1b[101m',
  lightGreen: '\x1b[102m',
  lightYellow: '\x1b[103m',
  lightBlue: '\x1b[104m',
  lightMagenta: '\x1b[105m',
  lightCyan: '\x1b[106m',
  lightWhite: '\x1b[107m'
}

// Otros Estilos
const style = {
  bold: '\x1b[1m',
  italic: '\x1b[3m',
  underline: '\x1b[4m',
  strikethrough: '\x1b[9m',
  reset: '\x1b[0m' // Resetea el color y estilo
}

const originalConsoleError = console.error
const originalConsoleWarn = console.warn
const originalConsoleInfo = console.info

console.error = function (...args) {
  const formattedArgs = args.map(arg => `${bgColor.red}${color.white}${style.italic}${style.bold}${arg}${style.reset}`)
  originalConsoleError.apply(console, formattedArgs)
}

console.warn = function (...args) {
  const formattedArgs = args.map(arg => `${bgColor.yellow}${color.white}${style.italic}${style.bold}${arg}${style.reset}`)
  originalConsoleWarn.apply(console, formattedArgs)
}

console.information = function (...args) {
  const formattedArgs = args.map(arg => `${bgColor.cyan}${color.white}${style.italic}${style.bold}${arg}${style.reset}`)
  originalConsoleInfo.apply(console, formattedArgs)
}

console.primary = function (...args) {
  const formattedArgs = args.map(arg => `${color.blue}${arg}${style.reset}`)
  console.log.apply(console, formattedArgs)
}

console.secondary = function (...args) {
  const formattedArgs = args.map(arg => `${color.lightGray}${arg}${style.reset}`)
  console.log.apply(console, formattedArgs)
}

console.success = function (...args) {
  const formattedArgs = args.map(arg => `${color.green}${arg}${style.reset}`)
  console.log.apply(console, formattedArgs)
}

console.danger = function (...args) {
  const formattedArgs = args.map(arg => `${color.red}${arg}${style.reset}`)
  console.log.apply(console, formattedArgs)
}

console.warning = function (...args) {
  const formattedArgs = args.map(arg => `${color.yellow}${arg}${style.reset}`)
  console.log.apply(console, formattedArgs)
}

console.info = function (...args) {
  const formattedArgs = args.map(arg => `${color.cyan}${arg}${style.reset}`)
  console.log.apply(console, formattedArgs)
}

module.exports = { color, bgColor, style, SetColor }
