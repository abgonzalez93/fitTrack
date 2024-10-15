import CreateNutritionistDto from '@dto/nutritionist/CreateNutritionistDto'
import UpdateNutritionistDto from '@dto/nutritionist/UpdateNutritionistDto'
import NutritionistService from '@services/NutritionistService'
import Nutritionist from '@entities/Nutritionist'

class NutritionistUseCase {
  constructor(private readonly nutritionistService: NutritionistService) {}

  async getAllNutritionists(): Promise<Nutritionist[]> {
    return await this.nutritionistService.getAllNutritionists()
  }

  async createNutritionist(data: CreateNutritionistDto): Promise<void> {
    return await this.nutritionistService.createNutritionist(data)
  }

  async getNutritionist(id: string): Promise<Nutritionist | null> {
    return await this.nutritionistService.getNutritionist(id)
  }

  async updateNutritionist(id: string, data: UpdateNutritionistDto): Promise<void> {
    await this.nutritionistService.updateNutritionist(id, data)
  }

  async deleteNutritionist(id: string): Promise<void> {
    await this.nutritionistService.deleteNutritionist(id)
  }
}

export default NutritionistUseCase
