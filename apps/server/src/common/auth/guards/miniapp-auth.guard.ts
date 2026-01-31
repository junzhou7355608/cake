import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

/**
 * 小程序端认证守卫
 * 校验 JWT 或 session 中的用户身份，将 user 挂载到 request.user
 *
 * 接入微信登录后，在此校验 code2session 获取的 openid/unionid 对应的 User，
 * 或校验基于 openid 签发的 JWT。
 */
@Injectable()
export class MiniappAuthGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    const request = context.switchToHttp().getRequest();

    // TODO: 接入微信登录后，从 Authorization header 解析 JWT，
    // 或从 cookie/session 获取用户，查询 User 并挂载到 request.user

    if (!request.user) {
      throw new UnauthorizedException('请先登录');
    }
    return true;
  }
}
