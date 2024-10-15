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
}

export default Nutritionist
