import CustomError from '@errors/CustomError'
import httpStatus from '@shared/httpStatus'

class MissingConfigError extends CustomError {
  constructor(message = 'Missing required config values in .env file') {
    super(message, httpStatus.INTERNAL_SERVER_ERROR)
  }
}

export default MissingConfigError
