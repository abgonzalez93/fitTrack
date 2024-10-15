import CreateClientDto from '@dto/client/CreateClientDto'
import UpdateClientDto from '@dto/client/UpdateClientDto'
import ClientService from '@services/ClientService'
import Client from '@entities/Client'

class ClientUseCase {
  constructor(private readonly clientService: ClientService) {}

  async getAllClients(): Promise<Client[]> {
    return await this.clientService.getAllClients()
  }

  async createClient(data: CreateClientDto): Promise<void> {
    return await this.clientService.createClient(data)
  }

  async getClient(id: string): Promise<Client | null> {
    return await this.clientService.getClient(id)
  }

  async updateClient(id: string, data: UpdateClientDto): Promise<void> {
    await this.clientService.updateClient(id, data)
  }

  async deleteClient(id: string): Promise<void> {
    await this.clientService.deleteClient(id)
  }
}

export default ClientUseCase
