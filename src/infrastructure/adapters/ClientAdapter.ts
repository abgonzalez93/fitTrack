import CreateClientDto from '@dto/client/CreateClientDto'
import UpdateClientDto from '@dto/client/UpdateClientDto'
import DatabaseAdapter from '@adapters/DatabaseAdapter'
import { Collection, ObjectId } from 'mongodb'
import ClientPort from '@ports/ClientPort'
import Client from '@entities/Client'

class ClientAdapter implements ClientPort {
  private collection: Collection<Client>

  constructor(private readonly databaseAdapter: DatabaseAdapter) {
    this.collection = this.databaseAdapter.getClient().db().collection('clients')
  }

  async getAllClients(): Promise<Client[]> {
    const clients: Client[] = []
    return clients
  }

  async createClient(data: CreateClientDto): Promise<void> {
    const client = new Client(
      new ObjectId().toString(),
      data.name,
      data.email,
      data.password,
      '',
      30,
      180,
      85,
      '',
      ''
    )

    await this.collection.insertOne(client)
  }

  async findClientById(id: string): Promise<Client | null> {
    const client = await this.collection.findOne({ _id: new ObjectId(id) })
    return client ? client : null
  }

  async updateClient(id: string, data: UpdateClientDto): Promise<void> {
    await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
  }

  async deleteClient(id: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(id) })
  }
}

export default ClientAdapter
