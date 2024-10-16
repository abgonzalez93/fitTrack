import DatabaseAdapter from '@adapters/DatabaseAdapter'
import DatabaseService from '@database/DatabaseService'

interface DatabaseContainerMap {
  databaseAdapter: DatabaseAdapter
  databaseService: DatabaseService
}

export default DatabaseContainerMap
