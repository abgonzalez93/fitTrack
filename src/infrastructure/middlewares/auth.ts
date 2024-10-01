import { type Application } from 'express'
import passport from 'passport'

const authMiddleware = (app: Application): void => {
  app.use(passport.initialize())
  app.use(passport.session())
}

export default authMiddleware
