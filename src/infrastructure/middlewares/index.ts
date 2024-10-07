import { Application } from 'express'
import config from '@config/config'
import helmetMiddleware from '@middlewares/helmet'
import compressionMiddleware from '@middlewares/compression'
import corsMiddleware from '@middlewares/cors'
import rateLimiter from '@middlewares/rateLimit'
import morganMiddleware from '@middlewares/morgan'
import authMiddleware from '@middlewares/auth'
import errorHandler from '@middlewares/errorHandler'
import express from 'express'

const { BODY_LIMIT } = config

const middlewares = (app: Application): void => {
  // Middlewares
  app.use(helmetMiddleware)
  app.use(compressionMiddleware)
  app.use(corsMiddleware)
  app.use(rateLimiter)
  app.use(morganMiddleware)
  authMiddleware(app)

  // Parses bodies
  app.use(express.json({ limit: BODY_LIMIT }))
  app.use(express.urlencoded({ limit: BODY_LIMIT, extended: true }))

  // Static files
  app.use(express.static('public'))

  // Error handling
  app.use(errorHandler)
}

export default middlewares
