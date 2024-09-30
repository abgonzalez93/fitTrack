import express from "express";
import middlewares from "@middlewares/middlewares";
import router from "@routes/router"

const app = express()
middlewares(app)
app.use(router)

// app.use(handleErrors)

export default app