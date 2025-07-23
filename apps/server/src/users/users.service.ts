import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { User } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findOne(where: Partial<User>) {
    return this.prisma.user.findFirst({ where })
  }
}
