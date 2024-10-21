import CreateClientDto from '@dto/client/CreateClientDto'
import UpdateClientDto from '@dto/client/UpdateClientDto'
import ClientPort from '@ports/ClientPort'
import Client from '@entities/Client'

class ClientUseCase {
  constructor(private readonly clientPort: ClientPort) {}

  async getAllClients(): Promise<Client[]> {
    return await this.clientPort.getAllClients()
  }

  async createClient(data: CreateClientDto): Promise<void> {
    return await this.clientPort.createClient(data)
  }

  async getClient(id: string): Promise<Client | null> {
    return await this.clientPort.findClientById(id)
  }

  async updateClient(id: string, data: UpdateClientDto): Promise<void> {
    await this.clientPort.updateClient(id, data)
  }

  async deleteClient(id: string): Promise<void> {
    await this.clientPort.deleteClient(id)
  }
}

export default ClientUseCase
