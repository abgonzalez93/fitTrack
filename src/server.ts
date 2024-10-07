import express, { type Express } from 'express'
import logger from '@logging/logger'
import middlewares from '@middlewares/index'
import router from '@routes/index'
import config from '@config/config'
import container from '@infrastructure/container'

const { PORT } = config
const app: Express = express()
const databaseUseCase = container.resolve('databaseUseCase')

;(async () => {
  try {
    await databaseUseCase.connectDatabase()

    middlewares(app)
    app.use(router)

    app.listen(PORT, () => {
      logger.info(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    logger.error(`Failed to start the server: ${error}`)
    process.exit(1)
  }
})()
