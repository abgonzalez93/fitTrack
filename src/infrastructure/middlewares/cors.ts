import cors from 'cors'
import config from '@config/config'

const { ALLOWED_ORIGINS } = config

const corsMiddleware = cors({
  origin: ALLOWED_ORIGINS,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
})

export default corsMiddleware
