
import UserService from '@services/UserService'
import UserDto from '@dto/UserDto'
import User from '@entities/User'

class UserUseCase {
  constructor(private readonly userService: UserService) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers()
  }

  async createUser(data: UserDto): Promise<User> {
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
