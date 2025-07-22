import { Injectable } from '@nestjs/common'
import { LoginParams, LoginResponse } from '@repo/types'

@Injectable()
export class LoginService {
  login(body: LoginParams): LoginResponse {
    console.log(body)
    return {
      code: 200,
      message: 'success'
    }
  }
}
