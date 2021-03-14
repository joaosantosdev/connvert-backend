import fetch from 'node-fetch'
import DebtSchema from '../schemas/debt-schema'

class ClientService {
  public async getClients (): Promise<any> {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .catch(_error => [])
    return data
  }

  public async getClientById (id: any): Promise<any> {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .catch(_error => null)
    return data
  }

  public async getDebtsByClientAll (clientId: any): Promise<any> {
    const debts = await DebtSchema.find({ client_id: clientId })
    return debts
  }

  public async getDebtsByClient (clientId: string, pagination:any): Promise<any> {
    const debts = await DebtSchema.paginate({ client_id: parseInt(clientId) },
      {
        page: parseInt(pagination.page),
        limit: parseInt(pagination.limit)
      })
    return debts
  }
}
export default new ClientService()
