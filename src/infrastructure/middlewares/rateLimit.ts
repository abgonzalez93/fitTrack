import rateLimit from 'express-rate-limit'
import config from '@config/config'

const { RATE_LIMIT_MAX } = config

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: RATE_LIMIT_MAX,
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
})

export default rateLimiter
