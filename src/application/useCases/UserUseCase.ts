import UserPort from '@ports/UserPort'
import User from '@entities/User'

class UserUseCase {
  constructor(private readonly userPort: UserPort) {}

  async getClient(id: string): Promise<User | null> {
    return await this.userPort.findUserById(id)
  }
}

export default UserUseCase
