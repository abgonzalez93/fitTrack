import DatabaseAdapter from '@adapters/DatabaseAdapter'
import { Collection, ObjectId } from 'mongodb'
import UserPort from '@ports/UserPort'
import User from '@entities/User'

class UserAdapter implements UserPort {
  private collection: Collection<User>

  constructor(private readonly databaseAdapter: DatabaseAdapter) {
    this.collection = this.databaseAdapter.getClient().db().collection('users')
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await this.collection.findOne({ _id: new ObjectId(id) })
    return user ? user : null
  }
}

export default UserAdapter
