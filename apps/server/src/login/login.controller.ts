import { Body, Controller, Post } from '@nestjs/common'
import { LoginService } from './login.service'
import type { LoginParams } from '@repo/types'

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  login(@Body() body: LoginParams) {
    return this.loginService.login(body)
  }
}
