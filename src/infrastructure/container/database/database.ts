import DatabaseAdapter from '@adapters/DatabaseAdapter'
import DatabaseService from '@database/DatabaseService'
import Container from '@container/Container'

const databaseDependencies = (container: Container): void => {
  const databaseAdapter = new DatabaseAdapter()
  container.register('databaseAdapter', databaseAdapter)

  const databaseService = new DatabaseService(databaseAdapter)
  container.register('databaseService', databaseService)
}

export default databaseDependencies
