import container from '@container/container'
import { Router } from 'express'

const userRouter = Router()
const userController = container.resolve('userController')

userRouter.get('/', userController.getAllUsers)
userRouter.post('/', userController.createUser)
userRouter.get('/:id', userController.getUser)
userRouter.put('/:id', userController.updateUser)
userRouter.delete('/:id', userController.deleteUser)

export default userRouter
