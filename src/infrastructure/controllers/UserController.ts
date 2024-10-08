import { Request, Response, NextFunction } from 'express'
import UserUseCase from '@useCases/UserUseCase'
import httpStatus from '@shared/httpStatus'

class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userUseCase.createUser(req.body)
      res.status(httpStatus.CREATED).json(user)
    } catch (error) {
      next(error)
    }
  }

  async getUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = await this.userUseCase.getUser(req.params.id)

      if (!user) {
        return res.status(httpStatus.NOT_FOUND).send('User not found')
      }

      res.status(httpStatus.OK).json(user)
    } catch (error) {
      next(error)
    }
  }
}

export default UserController
