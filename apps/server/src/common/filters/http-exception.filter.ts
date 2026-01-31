import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { ApiResponse } from '@common/dto/response.dto';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  constructor(private readonly configService: ConfigService) {}

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { status, body } = this.getExceptionPayload(exception);
    const traceId = (request as Request & { traceId?: string }).traceId;

    if (status >= 500) {
      this.logger.error(
        `[${traceId ?? '-'}] ${request.method} ${request.url} ${status}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
    }

    if (traceId) {
      response.setHeader('x-trace-id', traceId);
    }
    response.status(status).json(body);
  }

  private getExceptionPayload(exception: unknown): {
    status: number;
    body: ApiResponse;
  } {
    if (exception instanceof HttpException) {
      const status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      const res =
        typeof exceptionResponse === 'string'
          ? { message: exceptionResponse }
          : (exceptionResponse as Record<string, unknown>);

      const message = Array.isArray(res?.message)
        ? res.message[0]
        : ((res?.message as string) ?? exception.message);
      const code = (res?.code as number) ?? status;

      return {
        status,
        body: {
          code,
          data: null,
          message: (message as string) ?? '请求失败',
        },
      };
    }

    const isProduction =
      this.configService.get<string>('nodeEnv') === 'production';

    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      body: {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        message: isProduction ? '服务器内部错误' : String(exception),
      },
    };
  }
}
