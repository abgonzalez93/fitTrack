import jwtOptions from '@middlewares/passport/jwtOptions'
import { Strategy as JwtStrategy } from 'passport-jwt'
import container from '@container/index'
import passport from 'passport'

passport.use(new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const userUseCase = container.resolve('userUseCase')
    const user = await userUseCase.getClient(payload.sub)
    const result = user || false
    return done(null, result)
  } catch (error) {
    return done(error, false)
  }
}))
