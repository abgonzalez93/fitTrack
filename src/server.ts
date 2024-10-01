import path from 'path'
import dotenv from 'dotenv'
import express, { type Express } from "express"
import middlewares from "@middlewares/index"
import router from "@routes/index"
import config from '@config/config'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app: Express = express()
middlewares(app)
app.use(router)

const { PORT: port } = config

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})