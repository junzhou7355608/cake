import { plainToInstance } from 'class-transformer';
import { IsNumber, IsOptional, IsString, validateSync } from 'class-validator';

/**
 * 应用配置（从环境变量加载）
 */
export class AppConfig {
  @IsNumber()
  @IsOptional()
  port?: number = 3000;

  @IsString()
  databaseUrl!: string;

  @IsString()
  @IsOptional()
  nodeEnv?: string = 'development';
}

export function loadAppConfig(): AppConfig {
  const config = plainToInstance(
    AppConfig,
    {
      port: process.env['PORT'] ? Number(process.env['PORT']) : 3000,
      databaseUrl: process.env['DATABASE_URL'],
      nodeEnv: process.env['NODE_ENV'] ?? 'development',
    },
    { enableImplicitConversion: true },
  );

  const errors = validateSync(config);
  if (errors.length > 0) {
    const messages = errors
      .map((e) => Object.values(e.constraints ?? {}).join(', '))
      .join('; ');
    throw new Error(`配置校验失败: ${messages}`);
  }

  return {
    port: config.port,
    databaseUrl: config.databaseUrl,
    nodeEnv: config.nodeEnv,
  };
}
