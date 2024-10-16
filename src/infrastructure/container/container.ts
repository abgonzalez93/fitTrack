import ContainerInstanceMap from '@container/ContainerInstanceMap'
import logger from '@logging/logger'

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

export default Container
