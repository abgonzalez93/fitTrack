import { MongoClient } from 'mongodb'

export interface DatabasePort {
  connect(): Promise<void>
  disconnect(): Promise<void>
  getClient(): MongoClient
}

export default DatabasePort
