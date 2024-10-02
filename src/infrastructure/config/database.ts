import { MongoClient, ServerApiVersion } from "mongodb"
import config from "@config/config"

const { DB_URI } = config

const client = new MongoClient(DB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const connectDB = async () => {
  try {
    await client.connect()
    await client.db("admin").command({ ping: 1 })

    console.log("You successfully connected to MongoDB!")
    return client
  } catch(error) {
    console.error("Error connecting to MongoDB:", error)
    throw error
  }
}

export const disconnectDB = async () => {
  try {
    if (client) {
      await client.close()
      console.log("Database connection closed")
    }
  } catch(error) {
    console.error("Error closing database connection:", error)
    throw error
  }
}