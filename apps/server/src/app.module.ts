import { Module } from '@nestjs/common';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { PrismaModule } from '@/prisma.module';
import { ConfigModule } from '@/config/config.module';
import { CommonModule } from '@common/common.module';
import { AuthModule } from '@common/auth/auth.module';
import { MiniappModule } from '@api/miniapp/miniapp.module';
import { AdminModule } from '@api/admin/admin.module';
import { AllExceptionsFilter } from '@common/filters/http-exception.filter';
import { ResponseInterceptor } from '@common/interceptors/response.interceptor';
import { LoggingInterceptor } from '@common/interceptors/logging.interceptor';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    CommonModule,
    AuthModule,
    MiniappModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: AllExceptionsFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
  ],
})
export class AppModule {}
