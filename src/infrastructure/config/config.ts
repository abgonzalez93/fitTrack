interface Config {
  ALLOWED_ORIGINS: string[],
  BODY_LIMIT: string,
  DB_URI: string,
  NODE_ENV: string,
  PORT: number,
  RATE_LIMIT_MAX: number
}

const config: Config = {
  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS?.split(',') ?? (process.env.NODE_ENV === 'master' ? [] : ['*']),
  BODY_LIMIT: process.env.BODY_LIMIT ?? '100mb',
  DB_URI: process.env.DB_URI ?? '',
  NODE_ENV: process.env.NODE_ENV ?? 'develop',
  PORT: parseInt(process.env.PORT ?? '3000'),
  RATE_LIMIT_MAX: parseInt(process.env.RATE_LIMIT_MAX ?? '100', 10),
}

export default config
