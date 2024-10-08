class User {
  public readonly id: string
  public name: string
  public email: string
  public password: string

  constructor(data: { id: string, name: string, email: string, password: string }) {
    this.id = data.id
    this.name = data.name
    this.email = data.email
    this.password = data.password
  }
}

export default User
