import { Application } from 'express'
import helmetMiddleware from '@middlewares/helmet'
import compressionMiddleware from '@middlewares/compression'
import corsMiddleware from '@middlewares/cors'
import rateLimiter from '@middlewares/rateLimit'
import loggerMiddleware from '@middlewares/logger'
import authMiddleware from '@middlewares/auth'
import config from '@config/config'
import express from 'express'

const { BODY_LIMIT } = config

const middlewares = (app: Application): void => {
  app.use(helmetMiddleware)
  app.use(compressionMiddleware)
  app.use(corsMiddleware)
  app.use(rateLimiter)
  app.use(loggerMiddleware)
  authMiddleware(app)

  // Body parser
  app.use(express.json({ limit: BODY_LIMIT }))
  app.use(express.urlencoded({ limit: BODY_LIMIT, extended: true }))

  // Static files
  app.use(express.static('public'))
}

export default middlewares
