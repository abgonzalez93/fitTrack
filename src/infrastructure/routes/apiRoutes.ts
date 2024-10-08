import { Router } from 'express'
import userRouter from '@routes/UserRoutes'
import dietRouter from '@routes/DietRoutes'
// import { welcome } from '@controllers/apiController'

const apiRouter = Router()

apiRouter.get('/', /* welcome */)
apiRouter.use('/user', userRouter)
apiRouter.use('/diet', dietRouter)

export default apiRouter
