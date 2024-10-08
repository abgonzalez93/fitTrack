import express from 'express'
import apiRouter from '@routes/ApiRoutes'
import authRouter from '@routes/AuthRoutes'

const router = express.Router()

router.use('/api', apiRouter)
router.use('/auth', authRouter)

export default router
