import UserDto from '@dto/UserDto'
import User from '@entities/User'

interface UserPort {
  createUser(data: UserDto): Promise<User>
  findUserById(id: string): Promise<User | null>
  updateUser(user: User): Promise<void>
  deleteUser(id: string): Promise<void>
}

export default UserPort
