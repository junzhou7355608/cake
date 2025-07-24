import { Injectable } from '@nestjs/common'
import { PrismaService } from './prisma/prisma.service'
import bcrypt from 'bcrypt'

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello(): Promise<string> {
    // 创建测试用户
    const username = 'admin'
    const plainPassword = '123456'

    // 检查用户是否已存在
    const existingUser = await this.prisma.user.findUnique({
      where: { username }
    })

    if (!existingUser) {
      const password = await bcrypt.hash(plainPassword, 10)
      await this.prisma.user.create({
        data: {
          username,
          password,
          role: 'admin' // 添加必需的 role 字段
        }
      })
      console.log('用户创建成功:', username)
    } else {
      console.log('用户已存在:', username)
    }

    return 'Hello World!'
  }
}
