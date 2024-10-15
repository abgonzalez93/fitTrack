import CreateClientDto from '@dto/client/CreateClientDto'
import UpdateClientDto from '@dto/client/UpdateClientDto'
import Client from '@entities/Client'

interface ClientPort {
  getAllClients(): Promise<Client[]>
  createClient(data: CreateClientDto): Promise<void>
  findClientById(id: string): Promise<Client | null>
  updateClient(id: string, data: UpdateClientDto): Promise<void>
  deleteClient(id: string): Promise<void>
}

export default ClientPort
