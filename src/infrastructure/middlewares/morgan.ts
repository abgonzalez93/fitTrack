import morgan from 'morgan'
import config from '@config/config'

const { NODE_ENV } = config

const morganMiddleware = morgan(NODE_ENV === 'develop' ? 'dev' : 'combined')

export default morganMiddleware
