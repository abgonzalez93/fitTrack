import CreateUserDto from '@dto/CreateUserDto'
import UserService from '@services/UserService'
import User from '@entities/User'

class UserUseCase {
  constructor(private readonly userService: UserService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    return await this.userService.createUser(data)
  }

  async getUser(id: string): Promise<User | null> {
    return await this.userService.getUser(id)
  }

  async updateUser(user: User): Promise<void> {
    await this.userService.updateUser(user)
  }

  async deleteUser(id: string): Promise<void> {
    await this.userService.deleteUser(id)
  }
}

export default UserUseCase
