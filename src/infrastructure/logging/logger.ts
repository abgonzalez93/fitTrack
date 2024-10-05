import path from "path"
import { createLogger, format, transports } from "winston"

const { combine, timestamp, printf, colorize } = format

const customFormat = printf(({ level, message, timestamp }) => {
  const formattedDate = new Date(timestamp).toLocaleString()
  return `[${formattedDate}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    colorize(),
    customFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.resolve(__dirname, '../logging/logs/error.log'), level: 'error' }),
    new transports.File({ filename: path.resolve(__dirname, '../logging/logs/app.log') })
  ],
})

export default logger
