import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { Res, AuthRes, AuthReq, AuthPayload, UserType } from '@repo/types'
import { formatResponse } from '@/utils/response'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(params: AuthReq): Promise<Res<AuthRes>> {
    const user = await this.usersService.findOne({ username: params.username })
    if (user?.password !== params.password) {
      throw new UnauthorizedException()
    }
    const payload: AuthPayload = {
      sub: user.id.toString(),
      username: user.username,
      type: UserType.ADMIN
    }
    return formatResponse({
      access_token: await this.jwtService.signAsync(payload)
    })
  }
}
