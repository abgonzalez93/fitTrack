import NutritionistController from '@controllers/NutritionistController'
import NutritionistAdapter from '@adapters/NutritionistAdapter'
import NutritionistService from '@services/NutritionistService'
import NutritionistUseCase from '@useCases/NutritionistUseCase'

interface NutritionistContainerMap {
  nutritionistAdapter: NutritionistAdapter
  nutritionistService: NutritionistService
  nutritionistUseCase: NutritionistUseCase
  nutritionistController: NutritionistController
}

export default NutritionistContainerMap
