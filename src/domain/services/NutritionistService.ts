import CreateNutritionistDton from '@dto/nutritionist/CreateNutritionistDto'
import UpdateNutritionistDto from '@dto/nutritionist/UpdateNutritionistDto'
import NutritionistPort from '@ports/NutritionistPort'
import Nutritionist from '@entities/Nutritionist'

class NutritionistService {
  constructor(private readonly nutritionistPort: NutritionistPort) {}

  async getAllNutritionists(): Promise<Nutritionist[]> {
    return await this.nutritionistPort.getAllNutritionists()
  }

  async createNutritionist(data: CreateNutritionistDton): Promise<void> {
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

export default NutritionistService
