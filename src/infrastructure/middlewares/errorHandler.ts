import { Request, Response, NextFunction } from 'express'
import CustomError from '@errors/CustomError'
import httpStatus from '@shared/httpStatus'
import logger from '@logging/logger'
import config from '@config/index'

const { NODE_ENV } = config

const errorHandler = (err: CustomError, _req: Request, res: Response, next: NextFunction): void => {
  logger.error(err.stack)

  if (res.headersSent) {
    return next(err)
  }

  const statusCode = err instanceof CustomError ? err.statusCode : httpStatus.INTERNAL_SERVER_ERROR
  res.status(statusCode)

  res.json({
    message: err.message,
    ...(NODE_ENV === 'development' && { stack: err.stack }),
  })
}

export default errorHandler
