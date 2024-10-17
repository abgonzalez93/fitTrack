import helmet from 'helmet'
import config from '@config/index'

const { NODE_ENV } = config

const helmetMiddleware = helmet({
  contentSecurityPolicy: NODE_ENV === 'production' ? undefined : false,
  crossOriginResourcePolicy: { policy: 'cross-origin' }
})

export default helmetMiddleware
