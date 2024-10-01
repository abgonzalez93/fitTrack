import rateLimit from 'express-rate-limit'

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: parseInt(process.env.RATE_LIMIT_MAX || '100', 10),
  message: 'Too many requests, please try again later.',
  standardHeaders: true,
  legacyHeaders: false
})

export default rateLimiter
