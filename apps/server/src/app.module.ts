import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { AuthModule } from './auth/auth.module'
import { UsersModule } from './users/users.module'
import { PrismaService } from './prisma/prisma.service'
import { SignInService } from './sign-in/sign-in.service'
import { SignInController } from './sign-in/sign-in.controller'

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, SignInController],
  providers: [AppService, PrismaService, SignInService]
})
export class AppModule {}
