import { MongoClient } from 'mongodb'
import DatabasePort from '@ports/DatabasePort'

export default class DatabaseUseCase {
  constructor(private databasePort: DatabasePort) {}

  async connectDatabase(): Promise<void> {
    await this.databasePort.connect()
  }

  async disconnectDatabase(): Promise<void> {
    await this.databasePort.disconnect()
  }

  getClientDatabase(): MongoClient {
    return this.databasePort.getClient()
  }
}