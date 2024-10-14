import { Collection, ObjectId } from 'mongodb'
import DatabaseAdapter from '@adapters/DatabaseAdapter'
import CreateUserDto from '@dto/user/CreateUserDto'
import UpdateUserDto from '@dto/user/UpdateUserDto'
import UserPort from '@ports/UserPort'
import User from '@entities/User'

class UserAdapter implements UserPort {
  private collection: Collection<User>

  constructor(private readonly databaseAdapter: DatabaseAdapter) {
    this.collection = this.databaseAdapter.getClient().db().collection('users')
  }

  async getAllUsers(): Promise<User[]> {
    const users: User[] = []
    return users
  }

  async createUser(userData: CreateUserDto): Promise<User> {
    const user = new User(
      new ObjectId().toString(),
      userData.name,
      userData.email,
      userData.password,
      userData.role
    )

    await this.collection.insertOne(user)
    return user
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await this.collection.findOne({ _id: new ObjectId(id) })
    return user ? user : null
  }

  async updateUser(userData: UpdateUserDto): Promise<void> {
    await this.collection.updateOne({ _id: new ObjectId(userData.id) }, { $set: userData })
  }

  async deleteUser(id: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(id) })
  }
}

export default UserAdapter
