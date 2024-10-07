import { Router } from 'express'
// import { welcome } from '@controllers/apiController'
import userRouter from '@routes/userRoutes'
import dietRouter from '@routes/dietRoutes'

const apiRouter = Router()

apiRouter.get('/', /* welcome */)
apiRouter.use('/user', userRouter)
apiRouter.use('/diet', dietRouter)

export default apiRouter
