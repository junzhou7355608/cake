import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, LoginController],
  providers: [AppService, LoginService, PrismaService]
})
export class AppModule {}
