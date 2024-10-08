import DatabaseAdapter from '@adapters/DatabaseAdapter'
import DatabaseService from '@database/DatabaseService'
import UserAdapter from '@adapters/UserAdapter'
import UserService from '@services/UserService'
import UserUseCase from '@useCases/UserUseCase'
import UserController from '@controllers/UserController'

interface ContainerInstanceMap {
  databaseAdapter: DatabaseAdapter
  databaseService: DatabaseService
  userAdapter: UserAdapter
  userService: UserService
  userUseCase: UserUseCase
  userController: UserController
}

class Container {
  private instances: Partial<ContainerInstanceMap> = {}

  register<K extends keyof ContainerInstanceMap>(key: K, instance: ContainerInstanceMap[K]): void {
    this.instances[key] = instance
  }

  resolve<K extends keyof ContainerInstanceMap>(key: K): ContainerInstanceMap[K] {
    const instance = this.instances[key]

    if (!instance) {
      throw new Error(`Instance for ${key} not found`)
    }

    return instance
  }
}

const container = new Container()

// Registrar el adaptador de base de datos
const databaseAdapter = new DatabaseAdapter()
container.register('databaseAdapter', databaseAdapter)

// Registrar el servicio de base de datos
const databaseService = new DatabaseService(databaseAdapter)
container.register('databaseService', databaseService)

// Registrar el adaptador de usuarios
const userAdapter = new UserAdapter(databaseAdapter)
container.register('userAdapter', userAdapter)

// Registrar el servicio de usuarios
const userService = new UserService(userAdapter)
container.register('userService', userService)

// Registrar el caso de uso de usuarios
const userUseCase = new UserUseCase(userService)
container.register('userUseCase', userUseCase)

// Registrar el controlador de usuarios
const userController = new UserController(userUseCase)
container.register('userController', userController)

export default container
