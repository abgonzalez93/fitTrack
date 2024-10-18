import { createLogger, format, transports } from 'winston'
import path from 'path'

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss A' }),
  ),
  transports: [
    new transports.File({
      filename: path.resolve(__dirname, '../logging/logs/error.log'),
      level: 'error',
      format: format.combine(
        format.timestamp(),
        format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
      ),
    }),
    new transports.File({
      filename: path.resolve(__dirname, '../logging/logs/combined.log'),
      format: format.combine(
        format.timestamp(),
        format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
      ),
    }),
    new transports.Console({
      handleExceptions: true,
      handleRejections: true,
      format: format.combine(
        format.colorize({ level: true }),
        format.printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`)
      ),
    }),
  ],
})

export default logger
