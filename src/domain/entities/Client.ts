import User from '@entities/User'

class Client extends User {
  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    public nutritionistId: string,
    public age: number,
    public height: number,
    public weight: number,
    public goals: string,
    public activityLevel: string,
  ) {
    super(id, name, email, password, false)
  }
}

export default Client
