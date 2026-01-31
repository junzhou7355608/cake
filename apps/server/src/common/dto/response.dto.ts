/**
 * 统一 API 响应结构
 *
 * 约定：
 * - code: 0 表示成功，非 0 表示业务/系统错误（HTTP 异常时 code = statusCode）
 * - data: 成功时返回业务数据，失败时为 null
 * - message: 失败时的错误提示
 */
export const SUCCESS_CODE = 0;

export interface ApiResponse<T = unknown> {
  code: number;
  data: T;
  message?: string;
}

/**
 * 分页响应
 */
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}
