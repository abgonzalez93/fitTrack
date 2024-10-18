import CustomError from '@errors/CustomError'
import httpStatus from '@shared/httpStatus'

class ValidationError extends CustomError {
  constructor(message = 'Invalid data provided') {
    super(message, httpStatus.BAD_REQUEST)
  }
}

export default ValidationError
