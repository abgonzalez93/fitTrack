import MissingConfigError from '@errors/MissingConfigError'
import logger from '@logging/logger'
import Config from '@config/Config'

const required = ['DB_URI', 'JWT_SECRET_ACCESS', 'JWT_SECRET_REFRESH']

const requiredConfig = (config: Config): void => {
  const missingKeys = required.filter((key) => !config[key as keyof Config])

  if (missingKeys.length > 0) {
    const errorMessage = `Missing required config values in .env file: ${missingKeys.join(', ')}`
    logger.error(errorMessage)
    throw new MissingConfigError(errorMessage)
  }
}

export default requiredConfig
