import express, { type Express } from "express"
import middlewares from "@middlewares/index"
import router from "@routes/index"
import config from '@config/config'
import container from "@infrastructure/container"
import DatabaseUseCase from "@useCases/DatabaseUseCase"

const { PORT } = config
const app: Express = express()
const databaseUseCase = container.resolve<DatabaseUseCase>("databaseUseCase")

;(async () => {
  try {
    await databaseUseCase.connectDatabase()

    middlewares(app)
    app.use(router)

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start the server:', error)
  }
})()
