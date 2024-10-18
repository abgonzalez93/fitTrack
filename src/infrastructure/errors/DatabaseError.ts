import CustomError from '@errors/CustomError'
import httpStatus from '@shared/httpStatus'

class DatabaseError extends CustomError {
  constructor(message = 'Failed to connect to the database') {
    super(message, httpStatus.INTERNAL_SERVER_ERROR)
  }
}

export default DatabaseError
