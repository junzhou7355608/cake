import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

/**
 * 管理后台认证守卫
 * 校验管理员 JWT/session，将 admin 挂载到 request.admin
 *
 * 接入管理员登录后，在此校验 JWT 或 session 中的 Admin 身份。
 */
@Injectable()
export class AdminAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();

    // TODO: 接入管理员登录后，从 Authorization header 解析 JWT，
    // 查询 Admin 并挂载到 request.admin

    if (!request.admin) {
      throw new UnauthorizedException('请先登录管理后台');
    }
    return true;
  }
}
