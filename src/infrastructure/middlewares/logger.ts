import morgan from 'morgan'

const loggerMiddleware = morgan(process.env.NODE_ENV === 'develop' ? 'dev' : 'combined')

export default loggerMiddleware
