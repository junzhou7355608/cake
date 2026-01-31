import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * 获取当前管理后台登录管理员
 * 需配合 AdminAuthGuard 使用
 */
export const CurrentAdmin = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const admin = request.admin;
    return data ? admin?.[data] : admin;
  },
);
