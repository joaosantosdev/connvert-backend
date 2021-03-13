import { Request, Response } from 'express'
import validate from '../validators/validate'
import userValidator from '../validators/user-validator'
import Const from '../utils/const'
import userService from '../services/user-service'

export default class UserController {
  public static async login (request: Request, response: Response): Promise<Response> {
    try {
      const data = await userService.login(request.body)
      return response.status(Const.httpStauts.OK).json(data)
    } catch (error) {
      console.log(error)
      return response.status(error.status).json({})
    }
  }

  public static async register (request: Request, response: Response): Promise<Response> {
    const errors = await validate(userValidator, request.body)
    if (errors) {
      return response.status(Const.httpStauts.BAD_REQUEST).json(errors)
    }
    let user = null
    try {
      user = await userService.saveUser(request.body)
      console.log(user)
    } catch (error) {
      response.status(error.status).json(error)
    }
    return response.status(Const.httpStauts.CREATED).json(user)
  }
}
