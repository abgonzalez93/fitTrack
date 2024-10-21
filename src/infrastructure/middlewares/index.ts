import compressionMiddleware from '@middlewares/compression'
import errorHandler from '@middlewares/errorHandler'
import helmetMiddleware from '@middlewares/helmet'
import morganMiddleware from '@middlewares/morgan'
import rateLimiter from '@middlewares/rateLimit'
import corsMiddleware from '@middlewares/cors'
import express, { Application } from 'express'
import config from '@config/index'
import passport from 'passport'

const { BODY_LIMIT } = config

const middlewares = (app: Application): void => {
  // Middlewares
  app.use(helmetMiddleware)
  app.use(compressionMiddleware)
  app.use(corsMiddleware)
  app.use(rateLimiter)
  app.use(morganMiddleware)

  // Auth middleware
  app.use(passport.initialize())

  // Parses bodies
  app.use(express.json({ limit: BODY_LIMIT }))
  app.use(express.urlencoded({ limit: BODY_LIMIT, extended: true }))

  // Static files
  app.use(express.static('public'))

  // Error handling
  app.use(errorHandler)
}

export default middlewares
