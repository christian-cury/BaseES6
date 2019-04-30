import split from 'split'
import winston, { format } from 'winston'

const { combine } = format

const consoleConfig = {
  level: 'info',
  handleExceptions: true,
  format: combine(winston.format.colorize(), winston.format.simple())
}

const loggerTransports = new winston.transports.Console(consoleConfig)

const logger = winston.createLogger({
  transports: [loggerTransports],
  exitOnError: false
})

module.exports = logger
module.exports.stream = split().on('data', message => logger.info(message))