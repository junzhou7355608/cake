import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { PrismaService } from './prisma/prisma.service'
import { OrderModule } from './order/order.module';

@Module({
  imports: [AuthModule, UsersModule, OrderModule],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
