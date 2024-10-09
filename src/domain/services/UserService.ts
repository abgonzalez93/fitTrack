import UserPort from '@ports/UserPort'
import UserDto from '@dto/UserDto'
import User from '@entities/User'

class UserService {
  constructor(private readonly userPort: UserPort) {}

  async createUser(data: UserDto): Promise<User> {
    return await this.userPort.createUser(data)
  }

  async getUser(id: string): Promise<User | null> {
    return await this.userPort.findUserById(id)
  }

  async updateUser(user: User): Promise<void> {
    await this.userPort.updateUser(user)
  }

  async deleteUser(id: string): Promise<void> {
    await this.userPort.deleteUser(id)
  }
}

export default UserService
