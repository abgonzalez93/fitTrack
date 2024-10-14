import CreateUserDto from '@dto/user/CreateUserDto'
import UpdateUserDto from '@dto/user/UpdateUserDto'
import User from '@entities/User'

interface UserPort {
  getAllUsers(): Promise<User[]>
  createUser(userData: CreateUserDto): Promise<User>
  findUserById(id: string): Promise<User | null>
  updateUser(userData: UpdateUserDto): Promise<void>
  deleteUser(id: string): Promise<void>
}

export default UserPort
