import { Injectable, UnauthorizedException } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'
import { Res, AuthRes } from '@repo/types'
import { formatResponse } from '@/utils/response'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(username: string, password: string): Promise<Res<AuthRes>> {
    const user = await this.usersService.findOne({ username })
    if (user?.password !== password) {
      throw new UnauthorizedException()
    }
    const payload = { sub: user.id, username: user.username }
    return formatResponse({
      access_token: await this.jwtService.signAsync(payload)
    })
  }
}
