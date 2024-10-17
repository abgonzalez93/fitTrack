import logger from '@logging/logger'
import Config from '@config/Config'

const required = ['DB_URI', 'JWT_SECRET_ACCESS', 'JWT_SECRET_REFRESH']

const requiredConfig = (config: Config): void => {
  for (const key of required) {
    if (!config[key as keyof Config]) {
      logger.error(`Missing ${key} in .env file`)
    }
  }
}

export default requiredConfig
