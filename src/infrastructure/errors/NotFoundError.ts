import CustomError from '@errors/CustomError'
import httpStatus from '@shared/httpStatus'

class NotFoundError extends CustomError {
  constructor(message = 'Resource not found') {
    super(message, httpStatus.NOT_FOUND)
  }
}

export default NotFoundError