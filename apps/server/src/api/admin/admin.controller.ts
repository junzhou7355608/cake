import { Controller, Get } from '@nestjs/common';
import { Public } from '../../common/auth/decorators/public.decorator';

/**
 * 管理后台 API 入口
 * 路由前缀: /api/admin
 */
@Controller('admin')
export class AdminController {
  @Get('health')
  @Public()
  health() {
    return { status: 'ok', channel: 'admin' };
  }
}
