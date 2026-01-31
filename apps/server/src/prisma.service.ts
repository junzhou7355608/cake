import { Injectable } from '@nestjs/common';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '../generated/prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    const connectionString = process.env.DATABASE_URL;
    if (!connectionString) {
      throw new Error(
        'DATABASE_URL 未设置，请在 .env 中配置或设置环境变量。参考 .env.example',
      );
    }
    const adapter = new PrismaPg({ connectionString });
    super({ adapter });
  }
}
