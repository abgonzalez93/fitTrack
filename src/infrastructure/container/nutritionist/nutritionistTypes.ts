import NutritionistController from '@controllers/NutritionistController'
import NutritionistAdapter from '@adapters/NutritionistAdapter'
import NutritionistUseCase from '@useCases/NutritionistUseCase'

interface NutritionistContainerMap {
  nutritionistAdapter: NutritionistAdapter
  nutritionistUseCase: NutritionistUseCase
  nutritionistController: NutritionistController
}

export default NutritionistContainerMap
