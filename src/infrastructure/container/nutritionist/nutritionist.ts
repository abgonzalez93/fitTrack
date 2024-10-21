import NutritionistController from '@controllers/NutritionistController'
import NutritionistAdapter from '@adapters/NutritionistAdapter'
import NutritionistUseCase from '@useCases/NutritionistUseCase'
import Container from '@container/Container'

const nutritionistDependencies = (container: Container): void => {
  const databaseAdapter = container.resolve('databaseAdapter')

  const nutritionistAdapter = new NutritionistAdapter(databaseAdapter)
  container.register('nutritionistAdapter', nutritionistAdapter)

  const nutritionistUseCase = new NutritionistUseCase(nutritionistAdapter)
  container.register('nutritionistUseCase', nutritionistUseCase)

  const nutritionistController = new NutritionistController(nutritionistUseCase)
  container.register('nutritionistController', nutritionistController)
}

export default nutritionistDependencies
