import { HttpException, HttpStatus } from '@nestjs/common';

/**
 * 业务异常
 * 用于可预期的业务错误（如校验失败、资源不存在、权限不足等）
 *
 * @param message 用户可见的错误提示
 * @param code 业务错误码，默认使用 HTTP status
 * @param status HTTP 状态码，默认 400
 */
export class BusinessException extends HttpException {
  constructor(
    message: string,
    code?: number,
    status: HttpStatus = HttpStatus.BAD_REQUEST,
  ) {
    super({ message, code: code ?? status }, status);
  }
}
