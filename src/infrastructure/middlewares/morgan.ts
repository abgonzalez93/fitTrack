import morgan from 'morgan'
import config from '@config/index'

const { NODE_ENV } = config

const morganMiddleware = morgan(NODE_ENV === 'development' ? 'dev' : 'combined')

export default morganMiddleware
