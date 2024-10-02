import helmet from 'helmet'
import config from '@config/config'

const { NODE_ENV } = config

const helmetMiddleware = helmet({
  contentSecurityPolicy: NODE_ENV === 'master' ? undefined : false, // Deshabilitar CSP en desarrollo
  crossOriginResourcePolicy: { policy: 'cross-origin' }
})

export default helmetMiddleware
