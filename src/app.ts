import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import * as dotenv from 'dotenv'
import routes from './routers/routers'
import authMiddleware from './auth/auth-validator'
dotenv.config()

class App {
    private express: express.Application;

    public constructor () {
      this.express = express()
      this.database()
      this.middlewares()
    }

    private middlewares (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(routes)
    }

    private database (): void {
      mongoose.connect(process.env.MONGO_URL_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
    }

    public getApp () {
      return this.express
    }
}
export default new App().getApp()
