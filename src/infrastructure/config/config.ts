interface Config {
  ALLOWED_ORIGINS: string[],
  BODY_LIMIT: string,
  DB_URI: string,
  JWT_SECRET_ACCESS: string,
  JWT_SECRET_REFRESH: string,
  JWT_EXPIRES_ACCESS: number,
  JWT_EXPIRES_REFRESH: number,
  NODE_ENV: string,
  PORT: number,
  RATE_LIMIT_MAX: number
}

export default Config
