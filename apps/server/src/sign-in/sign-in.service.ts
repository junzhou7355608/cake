import { PrismaService } from '@/prisma/prisma.service'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { SignInDto } from './dto/sign-in.dto'
import { Res, SignInResponse } from '@repo/types'
import { JwtService } from '@nestjs/jwt'
import bcrypt from 'bcrypt'
import { formatResponse } from '@/utils/response'

@Injectable()
export class SignInService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  async signIn(signInDto: SignInDto): Promise<Res<SignInResponse>> {
    const { username, password } = signInDto
    const user = await this.prisma.user.findUnique({
      where: { username }
    })
    if (!user) {
      throw new UnauthorizedException('Invalid username or password')
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid username or password')
    }

    const payload = { sub: user.id, username: user.username }
    return formatResponse({
      access_token: await this.jwtService.signAsync(payload)
    })
  }
}
