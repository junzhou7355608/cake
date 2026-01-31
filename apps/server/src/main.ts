import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '@/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 剥离 DTO 中未定义的属性
      transform: true, // 自动转换类型（如 string -> number）
      forbidNonWhitelisted: false, // 存在未定义属性时仅剥离，不抛错
    }),
  );

  const port = configService.get<number>('port') ?? 3000;
  await app.listen(port);
}
bootstrap();
