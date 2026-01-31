import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * 获取当前小程序端登录用户
 * 需配合 MiniappAuthGuard 使用
 */
export const CurrentUser = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const user = request.user;
    return data ? user?.[data] : user;
  },
);
