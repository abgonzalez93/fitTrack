import DatabaseService from "@database/DatabaseService"
import DatabaseUseCase from "@useCases/DatabaseUseCase"
import DatabasePort from "@ports/DatabasePort"

class Container {
  private instances: { [key: string]: any } = {}

  register(key: string, instance: any): void {
    this.instances[key] = instance
  }

  resolve<T>(key: string): T {
    return this.instances[key]
  }
}

const container = new Container()

container.register("databaseService", new DatabaseService())
container.register("databaseUseCase", new DatabaseUseCase(container.resolve<DatabasePort>("databaseService")))

export default container