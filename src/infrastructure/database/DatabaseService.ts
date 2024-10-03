import { MongoClient, ServerApiVersion } from "mongodb"
import DatabasePort from "@ports/DatabasePort"
import config from "@config/config"

const { DB_URI } = config

export default class DatabaseService implements DatabasePort {
  private client: MongoClient

  constructor() {
    this.client = new MongoClient(DB_URI, {
      serverApi: {
          version: ServerApiVersion.v1,
          strict: true,
          deprecationErrors: true
      }
    })
  }

  async connect(): Promise<void> {
    try {
      await this.client.connect()
      await this.client.db("admin").command({ ping: 1 })
      console.log("You successfully connected to MongoDB!")
    } catch (error) {
      console.error("Error connecting to MongoDB:", error)
      throw error
    }
  }

  async disconnect(): Promise<void> {
    try {
      if (this.client) {
        await this.client.close()
        console.log("Database connection closed")
      }
    } catch (error) {
      console.error("Error closing database connection:", error)
      throw error
    }
  }

  getClient(): MongoClient {
    return this.client
  }
}