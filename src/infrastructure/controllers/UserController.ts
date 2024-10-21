import asyncHandler from 'express-async-handler'
import UserUseCase from '@useCases/UserUseCase'
import { Request, Response } from 'express'
import httpStatus from '@shared/httpStatus'

class UserController {
  constructor(private readonly userUseCase: UserUseCase) {}

  getUser = asyncHandler(async (req: Request, res: Response): Promise<void> => {
    const user = await this.userUseCase.getClient(req.params.id)
    if (!user) res.status(httpStatus.NO_CONTENT).send('User not found')
    res.status(httpStatus.OK).json(user)
  })
}

export default UserController
