import helmet from 'helmet'
import compression from 'compression'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import morgan from 'morgan'
import express, { type Application } from 'express'
import passport from 'passport'

const middlewares = (app: Application): void => {
  // Middleware to help protect your application from well-known vulnerabilities
  app.use(helmet({
    contentSecurityPolicy: process.env.NODE_ENV === 'master' ? undefined : false, // Disable CSP in development
    crossOriginResourcePolicy: { policy: 'cross-origin' }
  }))

  // Middleware for gzip compression
  app.use(compression())

  // Middleware to enable CORS (Cross-Origin Resource Sharing)
  app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || '*', // Define allowed origins in .env
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Customize allowed methods if needed
    credentials: true // Allow credentials (cookies, authorization headers, etc.)
  }))

  // Middleware to limit repetitive API requests to prevent brute force attacks
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10), // Limit each IP to X requests per window
    message: 'Too many requests, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  }))

  // HTTP logging middleware
  if (process.env.NODE_ENV === 'develop') {
    app.use(morgan('dev'));
  }

  // Middleware for parsing the body of incoming requests as JSON - Request body limit set to 100mb
  const bodyLimit = process.env.BODY_LIMIT || '100mb';
  app.use(express.json({ limit: bodyLimit }))
  app.use(express.urlencoded({ limit: bodyLimit, extended: true }))

  // Middleware to serve static files from 'public' directory
  app.use(express.static('public'))

  // Middleware for Passport
  app.use(passport.initialize())
}

export default middlewares