import nutritionistRouter from '@routes/NutritionistRoutes'
import clientRouter from './ClientRoutes'
import { Router } from 'express'

const apiRouter = Router()

apiRouter.get('/', /* welcome */)
apiRouter.use('/nutritionist', nutritionistRouter)
apiRouter.use('/client', clientRouter)

export default apiRouter
