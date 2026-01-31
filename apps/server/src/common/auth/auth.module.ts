import { Global, Module } from '@nestjs/common';
import { MiniappAuthGuard } from './guards/miniapp-auth.guard';
import { AdminAuthGuard } from './guards/admin-auth.guard';

@Global()
@Module({
  providers: [MiniappAuthGuard, AdminAuthGuard],
  exports: [MiniappAuthGuard, AdminAuthGuard],
})
export class AuthModule {}
