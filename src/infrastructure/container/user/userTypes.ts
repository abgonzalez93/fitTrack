import UserController from '@controllers/UserController'
import UserAdapter from '@adapters/UserAdapter'
import UserService from '@services/UserService'
import UserUseCase from '@useCases/UserUseCase'

interface UserContainerMap {
  userAdapter: UserAdapter
  userService: UserService
  userUseCase: UserUseCase
  userController: UserController
}

export default UserContainerMap
