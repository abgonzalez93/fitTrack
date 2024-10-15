import container from '@container/container'
import { Router } from 'express'

const nutritionistRouter = Router()
const nutritionistController = container.resolve('nutritionistController')

nutritionistRouter.get('/', nutritionistController.getAllNutritionists)
nutritionistRouter.post('/', nutritionistController.createNutritionist)
nutritionistRouter.get('/:id', nutritionistController.getNutritionist)
nutritionistRouter.put('/:id', nutritionistController.updateNutritionist)
nutritionistRouter.delete('/:id', nutritionistController.deleteNutritionist)

export default nutritionistRouter
