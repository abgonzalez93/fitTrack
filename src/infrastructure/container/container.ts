import DatabaseAdapter from '@adapters/DatabaseAdapter'
import DatabaseService from '@database/DatabaseService'
import NutritionistController from '@controllers/NutritionistController'
import NutritionistAdapter from '@adapters/NutritionistAdapter'
import NutritionistService from '@services/NutritionistService'
import NutritionistUseCase from '@useCases/NutritionistUseCase'
import ClientController from '@controllers/ClientController'
import ClientAdapter from '@adapters/ClientAdapter'
import ClientService from '@services/ClientService'
import ClientUseCase from '@useCases/ClientUseCase'
import logger from '@logging/logger'

interface ContainerInstanceMap {
  databaseAdapter: DatabaseAdapter
  databaseService: DatabaseService
  nutritionistAdapter: NutritionistAdapter
  nutritionistService: NutritionistService
  nutritionistUseCase: NutritionistUseCase
  nutritionistController: NutritionistController
  clientAdapter: ClientAdapter
  clientService: ClientService
  clientUseCase: ClientUseCase
  clientController: ClientController
}

class Container {
  private instances: Partial<ContainerInstanceMap> = {}

  register<K extends keyof ContainerInstanceMap>(key: K, instance: ContainerInstanceMap[K]): void {
    this.instances[key] = instance
  }

  resolve<K extends keyof ContainerInstanceMap>(key: K): ContainerInstanceMap[K] {
    const instance = this.instances[key]

    if (!instance) {
      const errorMessage = `Instance for ${key} not found`
      logger.error(errorMessage)
      throw new Error(errorMessage)
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

// Registrar el adaptador de nutricionistas
const nutritionistAdapter = new NutritionistAdapter(databaseAdapter)
container.register('nutritionistAdapter', nutritionistAdapter)

// Registrar el servicio de nutricionistas
const nutritionistService = new NutritionistService(nutritionistAdapter)
container.register('nutritionistService', nutritionistService)

// Registrar el caso de uso de nutricionistas
const nutritionistUseCase = new NutritionistUseCase(nutritionistService)
container.register('nutritionistUseCase', nutritionistUseCase)

// Registrar el controlador de nutricionistas
const nutritionistController = new NutritionistController(nutritionistUseCase)
container.register('nutritionistController', nutritionistController)

// Registrar el adaptador de clientes
const clientAdapter = new ClientAdapter(databaseAdapter)
container.register('clientAdapter', clientAdapter)

// Registrar el servicio de clientes
const clientService = new ClientService(clientAdapter)
container.register('clientService', clientService)

// Registrar el caso de uso de clientes
const clientUseCase = new ClientUseCase(clientService)
container.register('clientUseCase', clientUseCase)

// Registrar el controlador de clientes
const clientController = new ClientController(clientUseCase)
container.register('clientController', clientController)

export default container
