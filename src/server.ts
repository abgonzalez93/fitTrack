import express, { Express } from 'express'
import middlewares from '@middlewares/index'
import container from '@container/index'
import logger from '@logging/logger'
import config from '@config/config'
import router from '@routes/index'

const { PORT } = config
const app: Express = express()

;(async () => {
  try {
    const databaseService = container.resolve('databaseService')
    await databaseService.initializeConnection()

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
