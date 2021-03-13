import { Router } from 'express'
import userController from '../controllers/user-controller'
import clientController from '../controllers/client-controller'
import debtController from '../controllers/debt-controller'

import authValidator from '../auth/auth-validator'

const routes = Router()
routes.post('/users/login', userController.login)
routes.post('/users/register', userController.register)

const routerAuth = Router()
routerAuth.get('/clients', clientController.getAll, authValidator)
routerAuth.get('/clients/:id', clientController.getById, authValidator)
routerAuth.get('/clients/:id/debts', clientController.getDebtsByClient, authValidator)

routerAuth.post('/debts', debtController.saveDebt, authValidator)
routerAuth.put('/debts/:id', debtController.updateDebt, authValidator)
routerAuth.delete('/debts/:id', debtController.deleteDebt, authValidator)

routes.use('', authValidator, routerAuth)
export default routes
