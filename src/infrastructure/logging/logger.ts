import path from 'path'
import { createLogger, format, transports } from 'winston'

const { combine, colorize, timestamp, align, printf } = format

const logger = createLogger({
  level: 'info',
  format: combine(
    colorize({ all: true }),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss A',
    }),
    align(),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.resolve(__dirname, '../logging/logs/error.log'), level: 'error' }),
    new transports.File({ filename: path.resolve(__dirname, '../logging/logs/app.log') })
  ],
})

export default logger
