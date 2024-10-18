import CustomError from '@errors/CustomError'
import httpStatus from '@shared/httpStatus'

class InstanceNotFoundError extends CustomError {
  constructor(message = 'Instance not found') {
    super(message, httpStatus.INTERNAL_SERVER_ERROR)
  }
}

export default InstanceNotFoundError

