import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiResponse } from '@common/dto/response.dto';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private readonly logger = new Logger(AllExceptionsFilter.name);

  catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const { status, body } = this.getExceptionPayload(exception);
    if (status >= 500) {
      this.logger.error(
        `${request.method} ${request.url} ${status}`,
        exception instanceof Error ? exception.stack : String(exception),
      );
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
      const message =
        typeof exceptionResponse === 'string'
          ? exceptionResponse
          : ((exceptionResponse as Record<string, unknown>)?.message ??
            exception.message);
      const resolvedMessage = Array.isArray(message) ? message[0] : message;

      return {
        status,
        body: {
          code: status,
          data: null,
          message: resolvedMessage ?? '请求失败',
        },
      };
    }

    return {
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      body: {
        code: HttpStatus.INTERNAL_SERVER_ERROR,
        data: null,
        message:
          process.env['NODE_ENV'] === 'production'
            ? '服务器内部错误'
            : String(exception),
      },
    };
  }
}
