abstract class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public password: string,
    public isActive: boolean = false,
    public role: 'nutritionist' | 'client',
  ) {}

  // Métodos para obtener y actualizar atributos
  getName(): string {
    return this.name
  }

  setName(newName: string): void {
    this.name = newName
  }

  getEmail(): string {
    return this.email
  }

  setEmail(newEmail: string): void {
    this.email = newEmail
  }

  getPassword(): string {
    return this.password
  }

  setPassword(newPassword: string): void {
    this.password = newPassword
  }

  getRole(): string {
    return this.role
  }
}

export default User
