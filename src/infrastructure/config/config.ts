import dotenv from "dotenv"

dotenv.config()

export const config = {
  PORT: process.env.PORT !== undefined ? parseInt(process.env.PORT) : 3000,
  NODE_ENV: process.env.NODE_ENV ?? null,
  RECONNECTION_RETRY_TIME: 5000,
  RECONNECTION_MAX_ATTEMPS: 5,
}

export default config
