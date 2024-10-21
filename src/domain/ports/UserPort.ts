import User from '@entities/User'

interface UserPort {
  findUserById(id: string): Promise<User | null>
}

export default UserPort
