import morgan from 'morgan'
import config from '@config/config'

const { NODE_ENV } = config

const loggerMiddleware = morgan(NODE_ENV === 'develop' ? 'dev' : 'combined')

export default loggerMiddleware
