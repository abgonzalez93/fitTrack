import { MongoClient } from 'mongodb'

interface DatabasePort {
  connect(): Promise<void>
  disconnect(): Promise<void>
  getClient(): MongoClient
}

export default DatabasePort
