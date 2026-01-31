/**
 * 统一 API 响应结构
 */
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
