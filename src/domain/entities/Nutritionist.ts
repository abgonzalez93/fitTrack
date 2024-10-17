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

  setClients(newClients: string[]): void {
    this.clients = newClients
  }

  addClient(clientId: string): void {
    this.clients.push(clientId)
  }

  removeClient(clientId: string): void {
    this.clients = this.clients.filter(client => client !== clientId)
  }
}

export default Nutritionist
