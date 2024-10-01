import { Router } from 'express'
// import { getAllDiets, createDiet, getDiet, updateDiet, deleteDiet } from '@controllers/dietController'

const dietRouter = Router()

dietRouter.get('/', /* getAllDiets */)
dietRouter.post('/', /* createDiet */)
dietRouter.get('/:id', /* getDiet */)
dietRouter.put('/:id', /* updateDiet */)
dietRouter.delete('/:id', /* deleteDiet */)

export default dietRouter
