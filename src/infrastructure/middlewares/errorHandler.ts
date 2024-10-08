import { Request, Response, NextFunction } from 'express'
import httpStatus from '@shared/httpStatus'
import logger from '@logging/logger'
import config from '@config/config'

const { NODE_ENV } = config

const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction): void => {
  logger.error(err.stack)

  if (res.headersSent) {
    return next(err)
  }

  const statusCode = res.statusCode !== httpStatus.OK ? res.statusCode : httpStatus.INTERNAL_SERVER_ERROR
  res.status(statusCode)

  res.json({
    message: err.message,
    ...(NODE_ENV === 'develop' && { stack: err.stack }),
  })
}

export default errorHandler
