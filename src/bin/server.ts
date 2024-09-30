import path from 'path'
import dotenv from 'dotenv'
import start from '@bin/start'
import app from '../app'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

start(app)