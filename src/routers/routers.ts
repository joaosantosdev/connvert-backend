import { Router } from 'express'
import UserController from '../controllers/user-controller'
import ClientController from '../controllers/client-controller'
import authValidator from '../auth/auth-validator'

const routes = Router()
routes.post('/users/login', UserController.login)
routes.post('/users/register', UserController.register)

const routerAuth = Router()
routerAuth.get('/clients/', ClientController.getAll, authValidator)
routerAuth.get('/clients/:id', ClientController.getById, authValidator)

routes.use('', authValidator, routerAuth)

export default routes
