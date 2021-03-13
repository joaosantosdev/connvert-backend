import { Router } from 'express'
import UserController from '../controllers/user-controller'

const routes = Router()
routes.post('/users/login', UserController.login)
routes.post('/users/register', UserController.register)

export default routes
