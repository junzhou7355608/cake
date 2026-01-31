import { Controller, Get } from '@nestjs/common';
import { Public } from '@common/auth/decorators/public.decorator';

/**
 * 小程序端 API 入口
 * 路由前缀: /api/miniapp
 */
@Controller('miniapp')
export class MiniappController {
  @Get('health')
  @Public()
  health() {
    return { status: 'ok', channel: 'miniapp' };
  }
}
