import express, { type Express } from 'express'
import middlewares from '@middlewares/index'
import container from '@container/container'
import logger from '@logging/logger'
import config from '@config/config'
import router from '@routes/index'

const { PORT } = config

;(async () => {
  try {
    const databaseService = container.resolve('databaseService')
    await databaseService.initializeConnection()

    const app: Express = express()
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
