import CreateNutritionistDto from '@dto/nutritionist/CreateNutritionistDto'
import UpdateNutritionistDto from '@dto/nutritionist/UpdateNutritionistDto'
import DatabaseAdapter from '@adapters/DatabaseAdapter'
import NutritionistPort from '@ports/NutritionistPort'
import Nutritionist from '@entities/Nutritionist'
import { Collection, ObjectId } from 'mongodb'

class NutritionistAdapter implements NutritionistPort {
  private collection: Collection<Nutritionist>

  constructor(private readonly databaseAdapter: DatabaseAdapter) {
    this.collection = this.databaseAdapter.getClient().db().collection('nutritionists')
  }

  async getAllNutritionists(): Promise<Nutritionist[]> {
    const nutritionists: Nutritionist[] = []
    return nutritionists
  }

  async createNutritionist(data: CreateNutritionistDto): Promise<void> {
    const nutritionist = new Nutritionist(
      new ObjectId().toString(),
      data.name,
      data.email,
      data.password,
      []
    )

    await this.collection.insertOne(nutritionist)
  }

  async findNutritionistById(id: string): Promise<Nutritionist | null> {
    const nutritionist = await this.collection.findOne({ _id: new ObjectId(id) })
    return nutritionist ? nutritionist : null
  }

  async updateNutritionist(id: string, data: UpdateNutritionistDto): Promise<void> {
    await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: data })
  }

  async deleteNutritionist(id: string): Promise<void> {
    await this.collection.deleteOne({ _id: new ObjectId(id) })
  }
}

export default NutritionistAdapter
