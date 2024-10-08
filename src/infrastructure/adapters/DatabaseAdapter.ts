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
      logger.error(`Error connecting to MongoDB: ${error}`)
      throw new Error('Error connecting to MongoDB')
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this.client) {
        await this.client.close()
        logger.info('Database connection closed')
      }
    } catch (error) {
      logger.error(`Error closing database connection: ${error}`)
      throw new Error('Error closing database connection')
    }
  }

  getClient(): MongoClient {
    return this.client
  }
}

export default DatabaseAdapter
