import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  Logger,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';

export const TRACE_ID_HEADER = 'x-trace-id';

/**
 * 请求日志拦截器
 * - 为每个请求生成 traceId
 * - 记录请求方法、路径、耗时、状态码
 */
@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();
    const traceId = (request.headers[TRACE_ID_HEADER] as string) ?? uuidv4();
    (request as Request & { traceId: string }).traceId = traceId;

    const { method, url, ip } = request;
    const start = Date.now();

    return next.handle().pipe(
      tap({
        next: () => {
          const duration = Date.now() - start;
          const response = ctx.getResponse();
          const statusCode = response.statusCode;
          response.setHeader(TRACE_ID_HEADER, traceId);
          this.logger.log(
            JSON.stringify({
              traceId,
              method,
              url,
              ip: ip ?? request.socket?.remoteAddress,
              statusCode,
              duration: `${duration}ms`,
            }),
          );
        },
        error: (err: { status?: number; message?: string }) => {
          const duration = Date.now() - start;
          const statusCode = err.status ?? 500;
          this.logger.warn(
            JSON.stringify({
              traceId,
              method,
              url,
              ip: ip ?? request.socket?.remoteAddress,
              statusCode,
              duration: `${duration}ms`,
              error: err.message,
            }),
          );
        },
      }),
    );
  }
}
