import UserService from '@services/UserService'
import User from '@entities/User'

class UserUseCase {
  constructor(private readonly userService: UserService) {}

  async getClient(id: string): Promise<User | null> {
    return await this.userService.getClient(id)
  }
}

export default UserUseCase
