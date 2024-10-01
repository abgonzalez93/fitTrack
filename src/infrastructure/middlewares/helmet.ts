import helmet from 'helmet'

const helmetMiddleware = helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'master' ? undefined : false, // Deshabilitar CSP en desarrollo
  crossOriginResourcePolicy: { policy: 'cross-origin' }
})

export default helmetMiddleware
