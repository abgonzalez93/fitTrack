import requiredConfig from './requiredConfig'
import Config from '@config/Config'

process.loadEnvFile()

const config: Config = {
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') ?? (process.env.NODE_ENV === 'production' ? [] : ['*']),
  BODY_LIMIT: process.env.BODY_LIMIT ?? '100mb',
  DB_URI: process.env.DB_URI ?? '',
  JWT_SECRET_ACCESS: process.env.JWT_SECRET_ACCESS ?? '',
  JWT_SECRET_REFRESH: process.env.JWT_SECRET_REFRESH ?? '',
  JWT_EXPIRES_ACCESS: parseInt(process.env.JWT_EXPIRES_ACCESS ?? '900', 10),
  JWT_EXPIRES_REFRESH: parseInt(process.env.JWT_EXPIRES_REFRESH ?? '86400', 10),
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: parseInt(process.env.PORT ?? '3000', 10),
  RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX ?? '100', 10),
}

// Required config in .env file [ DB_URI, JWT_SECRET_ACCESS, JWT_SECRET_REFRESH ]
requiredConfig(config)

export default config
