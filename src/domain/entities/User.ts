class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: string,
    public password: string,
    public role: 'nutritionist' | 'client',
    public isActive: boolean = false
  ) {}
}

export default User
