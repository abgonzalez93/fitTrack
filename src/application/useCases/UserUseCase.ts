import CreateUserDto from '@dto/user/CreateUserDto'
import UpdateUserDto from '@dto/user/UpdateUserDto'
import UserService from '@services/UserService'
import User from '@entities/User'

class UserUseCase {
  constructor(private readonly userService: UserService) {}

  async getAllUsers(): Promise<User[]> {
    return await this.userService.getAllUsers()
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    return await this.userService.createUser(userData)
  }

  async getUser(id: string): Promise<User | null> {
    return await this.userService.getUser(id)
  }

  async updateUser(userData: UpdateUserDto): Promise<void> {
    await this.userService.updateUser(userData)
  }

  async deleteUser(id: string): Promise<void> {
    await this.userService.deleteUser(id)
  }
}

export default UserUseCase
