import DebtSchema from '../schemas/debt-schema'
import validate from '../validators/validate'
import debtValidator from '../validators/debt-validator'
import Const from '../utils/const'
import clientService from './client-service'
import ResponseError from '../errors/response-error'

class DebtService {
  public async saveDebt (body: any): Promise<any> {
    const debt = await DebtSchema.create(body)
    return debt
  }

  public async updateDebt (id: string, body: any): Promise<any> {
    const data = await DebtSchema.findByIdAndUpdate(id, body, {
      new: true
    }).catch(_error => {
      throw new ResponseError('Dívida não encontrada.', Const.httpStauts.NOT_FOUND)
    })
    return data
  }

  public async deleteDebt (id: string) {
    const data = await DebtSchema.findByIdAndDelete(id).catch(_error => {
      throw new ResponseError('Dívida não encontrada.', Const.httpStauts.NOT_FOUND)
    })
    return data
  }

  public async validateDebt (body:any): Promise<any> {
    const data = await validate(debtValidator, body)
    if (data.errors) {
      throw new ResponseError(data.errors, Const.httpStauts.BAD_REQUEST)
    }
    const client = await clientService.getClientById(body.client_id)
    if (!client.id) {
      throw new ResponseError('Cliente não encontrado.', Const.httpStauts.NOT_FOUND)
    }
    return data.item
  }
}
export default new DebtService()
