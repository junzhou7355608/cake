import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma.module';
import { CommonModule } from './common/common.module';
import { AuthModule } from './common/auth/auth.module';
import { MiniappModule } from './api/miniapp/miniapp.module';
import { AdminModule } from './api/admin/admin.module';

@Module({
  imports: [PrismaModule, CommonModule, AuthModule, MiniappModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
