import UserController from '@controllers/UserController'
import UserAdapter from '@adapters/UserAdapter'
import UserUseCase from '@useCases/UserUseCase'

interface UserContainerMap {
  userAdapter: UserAdapter
  userUseCase: UserUseCase
  userController: UserController
}

export default UserContainerMap
