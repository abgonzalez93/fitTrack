import DatabasePort from '@ports/DatabasePort'

class DatabaseService {
  constructor(private readonly databasePort: DatabasePort) {}

  async initializeConnection(): Promise<void> {
    await this.databasePort.connect()
  }

  async closeConnection(): Promise<void> {
    await this.databasePort.disconnect()
  }
}

export default DatabaseService
