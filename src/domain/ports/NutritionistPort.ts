import CreateNutritionistDto from '@dto/nutritionist/CreateNutritionistDto'
import UpdateNutritionistDto from '@dto/nutritionist/UpdateNutritionistDto'
import Nutritionist from '@entities/Nutritionist'

interface NutritionistPort {
  getAllNutritionists(): Promise<Nutritionist[]>
  createNutritionist(data: CreateNutritionistDto): Promise<void>
  findNutritionistById(id: string): Promise<Nutritionist | null>
  updateNutritionist(id: string, data: UpdateNutritionistDto): Promise<void>
  deleteNutritionist(id: string): Promise<void>
}

export default NutritionistPort
