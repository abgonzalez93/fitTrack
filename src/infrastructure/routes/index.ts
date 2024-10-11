import authRouter from '@routes/AuthRoutes'
import apiRouter from '@routes/ApiRoutes'
import express from 'express'

const router = express.Router()

router.use('/api', apiRouter)
router.use('/auth', authRouter)

export default router
