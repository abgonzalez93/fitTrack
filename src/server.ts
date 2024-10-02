import express, { type Express } from "express"
import middlewares from "@middlewares/index"
import router from "@routes/index"
import config from '@config/config'
import { connectDB } from '@config/database'

const { PORT } = config
const app: Express = express()

const startServer = async () => {
  try {
    await connectDB()
    console.log('Database connected successfully')

    middlewares(app)
    app.use(router)

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Database connection error:', error)
  }
}

startServer()
