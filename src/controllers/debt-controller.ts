import { Request, Response } from 'express'
import Const from '../utils/const'
import debService from '../services/debt-service'

class DebtController {
  public async saveDebt (request: Request, response: Response): Promise<Response> {
    try {
      let data = debService.validateDebt(request.body)
      data = await debService.saveDebt(data)
      return response.status(Const.httpStauts.OK).json(data)
    } catch (error) {
      return response.status(error.status).json(error)
    }
  }

  public async updateDebt (request: Request, response: Response): Promise<Response> {
    try {
      let data = await debService.validateDebt(request.body)
      data = await debService.updateDebt(request.params.id, data)
      return response.status(Const.httpStauts.OK).json(data)
    } catch (error) {
      return response.status(error.status).json(error)
    }
  }

  public async deleteDebt (request: Request, response: Response): Promise<Response> {
    try {
      const data = await debService.deleteDebt(request.params.id)
      return response.status(Const.httpStauts.OK).json(data)
    } catch (error) {
      return response.status(error.status).json(error)
    }
  }
}

export default new DebtController()
