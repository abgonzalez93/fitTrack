import { Router } from 'express'
// import { login, logout, register, refresh } from '@controllers/authController'

const authRouter = Router()

authRouter.post('/login', /* login */)
authRouter.post('/logout', /* logout */)
authRouter.post('/register', /* register */)
authRouter.post('/refresh', /* refresh */)

export default authRouter