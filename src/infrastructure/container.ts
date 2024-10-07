import DatabaseService from '@database/DatabaseService'
import DatabaseUseCase from '@useCases/DatabaseUseCase'
import DatabasePort from '@ports/DatabasePort'

interface ContainerInstanceMap {
  databaseService: DatabaseService
  databaseUseCase: DatabaseUseCase
  databasePort: DatabasePort
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

container.register('databaseService', new DatabaseService())
container.register('databaseUseCase', new DatabaseUseCase(container.resolve('databaseService')))

export default container
