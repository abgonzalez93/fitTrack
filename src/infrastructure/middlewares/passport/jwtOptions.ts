import { ExtractJwt, StrategyOptionsWithoutRequest } from 'passport-jwt'
import config from '@config/index'

const jwtOptions: StrategyOptionsWithoutRequest = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.JWT_SECRET_ACCESS,
}

export default jwtOptions
