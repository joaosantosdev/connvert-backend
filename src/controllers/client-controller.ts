import { Request, Response } from 'express'
import Const from '../utils/const'
import fetch from 'node-fetch'

export default class ClientController {
  public static async getAll (request: Request, response: Response): Promise<Response> {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.status(Const.httpStauts.OK).json(await data.json())
  }

  public static async getById (request: Request, response: Response): Promise<Response> {
    const data = await fetch(`https://jsonplaceholder.typicode.com/users/${request.params.id}`)
    return response.status(Const.httpStauts.OK).json(await data.json())
  }
}
