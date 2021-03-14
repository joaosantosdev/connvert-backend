import { Request, Response } from 'express'
import Const from '../utils/const'
import clientService from '../services/client-service'
import debtService from '../services/debt-service'

class ClientController {
  public async getAll (request: Request, response: Response): Promise<Response> {
    const data = await clientService.getClients()
    for (const client of data) {
      client.valueTotal = 0
      const debts = await clientService.getDebtsByClientAll(client.id)
      const values = debts.map(item => item.value)
      if (values.length > 0) {
        client.valueTotal = values.reduce((v1, v2) => v1 + v2)
      }
    }
    return response.status(Const.httpStauts.OK).json(data)
  }

  public async getById (request: Request, response: Response): Promise<Response> {
    const data = await clientService.getClientById(request.params.id)
    return response.status(Const.httpStauts.OK).json(data)
  }

  public async getDebtsByClient (request: Request, response: Response): Promise<Response> {
    const pagination = { limit: request.query.limit || 5, page: request.query.page || 1 }
    const data = await clientService.getDebtsByClient(request.params.id, pagination)
    return response.status(Const.httpStauts.OK).json(data)
  }
}
export default new ClientController()
