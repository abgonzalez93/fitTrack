import CreateNutritionistDto from '@dto/nutritionist/CreateNutritionistDto'
import UpdateNutritionistDto from '@dto/nutritionist/UpdateNutritionistDto'
import NutritionistPort from '@ports/NutritionistPort'
import Nutritionist from '@entities/Nutritionist'

class NutritionistUseCase {
  constructor(private readonly nutritionistPort: NutritionistPort) {}

  async getAllNutritionists(): Promise<Nutritionist[]> {
    return await this.nutritionistPort.getAllNutritionists()
  }

  async createNutritionist(data: CreateNutritionistDto): Promise<void> {
    return await this.nutritionistPort.createNutritionist(data)
  }

  async getNutritionist(id: string): Promise<Nutritionist | null> {
    return await this.nutritionistPort.findNutritionistById(id)
  }

  async updateNutritionist(id: string, data: UpdateNutritionistDto): Promise<void> {
    await this.nutritionistPort.updateNutritionist(id, data)
  }

  async deleteNutritionist(id: string): Promise<void> {
    await this.nutritionistPort.deleteNutritionist(id)
  }
}

export default NutritionistUseCase
