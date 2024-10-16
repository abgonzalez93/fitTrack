import NutritionistController from '@controllers/NutritionistController'
import NutritionistAdapter from '@adapters/NutritionistAdapter'
import NutritionistService from '@services/NutritionistService'
import NutritionistUseCase from '@useCases/NutritionistUseCase'
import Container from '@container/Container'

const nutritionistDependencies = (container: Container): void => {
  const databaseAdapter = container.resolve('databaseAdapter')

  const nutritionistAdapter = new NutritionistAdapter(databaseAdapter)
  container.register('nutritionistAdapter', nutritionistAdapter)

  const nutritionistService = new NutritionistService(nutritionistAdapter)
  container.register('nutritionistService', nutritionistService)

  const nutritionistUseCase = new NutritionistUseCase(nutritionistService)
  container.register('nutritionistUseCase', nutritionistUseCase)

  const nutritionistController = new NutritionistController(nutritionistUseCase)
  container.register('nutritionistController', nutritionistController)
}

export default nutritionistDependencies
