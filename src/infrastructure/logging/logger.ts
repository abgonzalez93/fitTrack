import { createLogger, format, transports } from 'winston'
import path from 'path'

const { align, combine, colorize, printf, timestamp } = format

const logger = createLogger({
  level: 'info',
  format: combine(
    align(),
    colorize({ all: true }),
    timestamp({ format: 'YYYY-MM-DD hh:mm:ss A' }),
    printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.File({ filename: path.resolve(__dirname, '../logging/logs/error.log'), level: 'error' }),
    new transports.File({ filename: path.resolve(__dirname, '../logging/logs/combined.log') }),
    new transports.Console(),
  ],
})

export default logger
