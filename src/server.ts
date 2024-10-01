import path from 'path'
import dotenv from 'dotenv'
import express from "express";
import middlewares from "@middlewares/middlewares";
import router from "@routes/router"
import config from '@config/config'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app = express()
middlewares(app)
app.use(router)

const { PORT: port } = config

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})