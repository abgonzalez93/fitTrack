import express from 'express'
import authRouter from '@routes/authRoutes'
import apiRouter from '@routes/apiRoutes'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/api', apiRouter)

export default router
