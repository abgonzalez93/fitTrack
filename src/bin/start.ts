import { type Express } from 'express'
import config from '@config/config'

const { PORT: port } = config

const start = (app: Express): void => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
}

export default start
