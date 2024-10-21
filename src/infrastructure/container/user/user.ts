import UserController from '@controllers/UserController'
import UserAdapter from '@adapters/UserAdapter'
import UserUseCase from '@useCases/UserUseCase'
import Container from '@container/Container'

const userDependencies = (container: Container): void => {
  const databaseAdapter = container.resolve('databaseAdapter')

  const userAdapter = new UserAdapter(databaseAdapter)
  container.register('userAdapter', userAdapter)

  const userUseCase = new UserUseCase(userAdapter)
  container.register('userUseCase', userUseCase)

  const userController = new UserController(userUseCase)
  container.register('userController', userController)
}

export default userDependencies
