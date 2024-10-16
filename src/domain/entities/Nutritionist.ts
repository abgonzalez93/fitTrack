import User from '@entities/User'

class Nutritionist extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    public clients: string[]
  ) {
    super(id, name, email, password, false)
  }

  // Métodos para obtener y actualizar atributos
  getClients(): string[] {
    return this.clients
  }

  addClient(clientId: string): void {
    this.clients.push(clientId)
  }

  removeClient(clientId: string): void {
    this.clients = this.clients.filter(client => client !== clientId)
  }

  updateClients(newClients: string[]): void {
    this.clients = newClients
  }
}

export default Nutritionist
