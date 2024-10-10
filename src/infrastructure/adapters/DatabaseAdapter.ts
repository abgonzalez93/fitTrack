import { MongoClient, ServerApiVersion } from 'mongodb'
import DatabasePort from '@ports/DatabasePort'
import logger from '@logging/logger'
import config from '@config/config'

const { DB_URI } = config

class DatabaseAdapter implements DatabasePort {
  private client: MongoClient

  constructor() {
    this.client = new MongoClient(DB_URI, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    })
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect()
      logger.info('You successfully connected to MongoDB!')
    } catch (error) {
      const errorMessage = `Error connecting to MongoDB: ${error}`
      logger.error(errorMessage)
      throw new Error(errorMessage)
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this.client) {
        await this.client.close()
        logger.info('Database connection closed')
      }
    } catch (error) {
      const errorMessage = `Error closing database connection: ${error}`
      logger.error(errorMessage)
      throw new Error(errorMessage)
    }
  }

  getClient(): MongoClient {
    return this.client
  }
}

export default DatabaseAdapter
