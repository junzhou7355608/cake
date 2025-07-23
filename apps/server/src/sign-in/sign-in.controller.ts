import { Body, Controller, Post } from '@nestjs/common'
import { SignInService } from './sign-in.service'
import { SignInDto } from './dto/sign-in.dto'

@Controller('sign-in')
export class SignInController {
  constructor(private readonly signInService: SignInService) {}

  @Post()
  signIn(@Body() signInDto: SignInDto) {
    return this.signInService.signIn(signInDto)
  }
}
