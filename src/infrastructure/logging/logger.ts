import path from 'path'
import { createLogger, format, transports } from 'winston'

const { align, combine, colorize, printf, timestamp } = format

const logger = createLogger({
  format: combine(
    align(),
    colorize({ all: true }),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
    timestamp({
      format: 'YYYY-MM-DD hh:mm:ss A',
    })
  ),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.resolve(__dirname, '../logging/logs/combined.log'),
      level: 'info',
    }),
    new transports.File({
      filename: path.resolve(__dirname, '../logging/logs/error.log'),
      level: 'error'
    }),
  ],
})

export default logger
