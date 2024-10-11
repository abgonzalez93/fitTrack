import { Request, Response, NextFunction } from 'express'
import userValidationSchema from '@validations/user/userValidationSchema'
import UserUseCase from '@useCases/UserUseCase'
import httpStatus from '@shared/httpStatus'
import validate from '@validations/index'
import UserDto from '@dto/UserDto'

class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  async getAllUsers(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await this.userUseCase.getAllUsers()

      if (users.length === 0) {
        res.status(httpStatus.NO_CONTENT).send('Users not found')
      }

      res.status(httpStatus.OK).json(users)
    } catch (error) {
      next(error)
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // Validate data with Ajv
      const userData: UserDto = req.body
      validate(userValidationSchema, userData)

      const user = await this.userUseCase.createUser(userData)
      res.status(httpStatus.CREATED).json(user)
    } catch (error) {
      next(error)
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await this.userUseCase.getUser(req.params.id)

      if (!user) {
        res.status(httpStatus.NO_CONTENT).send('User not found')
      }

      res.status(httpStatus.OK).json(user)
    } catch (error) {
      next(error)
    }
  }

  async updateUser(_req: Request, _res: Response, next: NextFunction): Promise<void> {
    try {
    } catch (error) {
      next(error)
    }
  }

  async deleteUser(_req: Request, _res: Response, next: NextFunction): Promise<void> {
    try {
    } catch (error) {
      next(error)
    }
  }
}

export default UserController
