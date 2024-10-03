import { MongoClient } from "mongodb"

export default interface DatabasePort {
  connect(): Promise<void>
  disconnect(): Promise<void>
  getClient(): MongoClient
}
