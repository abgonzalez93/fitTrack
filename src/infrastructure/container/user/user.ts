import UserController from '@controllers/UserController'
import UserAdapter from '@adapters/UserAdapter'
import UserService from '@services/UserService'
import UserUseCase from '@useCases/UserUseCase'
import Container from '@container/Container'

const userDependencies = (container: Container): void => {
  const databaseAdapter = container.resolve('databaseAdapter')

  const userAdapter = new UserAdapter(databaseAdapter)
  container.register('userAdapter', userAdapter)

  const userService = new UserService(userAdapter)
  container.register('userService', userService)

  const userUseCase = new UserUseCase(userService)
  container.register('userUseCase', userUseCase)

  const userController = new UserController(userUseCase)
  container.register('userController', userController)
}

export default userDependencies
