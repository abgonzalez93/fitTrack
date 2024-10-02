export const config = {
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') ?? '*',
  BODY_LIMIT: process.env.BODY_LIMIT ?? '100mb',
  DB_URI: process.env.DB_URI ?? '',
  NODE_ENV: process.env.NODE_ENV ?? null,
  PORT: parseInt(process.env.PORT ?? '3000'),
  RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX ?? '100', 10),
}

export default config
