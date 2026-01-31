import { createParamDecorator, ExecutionContext } from '@nestjs/common';

/**
 * 获取当前请求的 traceId
 */
export const TraceId = createParamDecorator(
  (_data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return (request as { traceId?: string }).traceId;
  },
);
