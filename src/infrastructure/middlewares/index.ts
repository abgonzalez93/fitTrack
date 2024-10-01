import { Application } from 'express'
import helmetMiddleware from '@middlewares/helmet'
import compressionMiddleware from '@middlewares/compression'
import corsMiddleware from '@middlewares/cors'
import rateLimiter from '@middlewares/rateLimit'
import loggerMiddleware from '@middlewares/logger'
import authMiddleware from '@middlewares/auth'
import express from 'express'

const bodyLimit = process.env.BODY_LIMIT || '100mb'

const middlewares = (app: Application): void => {
  app.use(helmetMiddleware)
  app.use(compressionMiddleware)
  app.use(corsMiddleware)
  app.use(rateLimiter)
  app.use(loggerMiddleware)
  authMiddleware(app)

  // Parseo de body
  app.use(express.json({ limit: bodyLimit }))
  app.use(express.urlencoded({ limit: bodyLimit, extended: true }))

  // Archivos estáticos
  app.use(express.static('public'))
}

export default middlewares
