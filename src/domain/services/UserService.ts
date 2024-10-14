import CreateUserDto from '@dto/user/CreateUserDto'
import UpdateUserDto from '@dto/user/UpdateUserDto'
import UserPort from '@ports/UserPort'
import User from '@entities/User'

class UserService {
  constructor(private readonly userPort: UserPort) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userPort.getAllUsers()
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    return await this.userPort.createUser(userData)
  }

  async getUser(id: string): Promise<User | null> {
    return await this.userPort.findUserById(id)
  }

  async updateUser(userData: UpdateUserDto): Promise<void> {
    await this.userPort.updateUser(userData)
  }

  async deleteUser(id: string): Promise<void> {
    await this.userPort.deleteUser(id)
  }
}

export default UserService
