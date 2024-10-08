import { Collection, ObjectId } from 'mongodb'
import DatabaseAdapter from '@adapters/DatabaseAdapter'
import CreateUserDto from '@dto/CreateUserDto'
import UserPort from '@ports/UserPort'
import User from '@entities/User'

class UserAdapter implements UserPort {
  private collection: Collection<User>

  constructor(private readonly databaseAdapter: DatabaseAdapter) {
    this.collection = this.databaseAdapter.getClient().db().collection('users')
  }

  async createUser(data: CreateUserDto): Promise<User> {
    const user: User = { ...data, id: new ObjectId().toString() }
    await this.collection.insertOne(user)
    return user
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await this.collection.findOne({ _id: new ObjectId(id) })
    return user ? { ...user, id: user._id.toString() } : null
  }

  async updateUser(user: User): Promise<void> {
    await this.collection.updateOne({ _id: new ObjectId(user.id) }, { $set: user })
  }

  async deleteUser(id: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(id) })
  }
}

export default UserAdapter
