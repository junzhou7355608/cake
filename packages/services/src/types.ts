/**
 * API 响应类型
 */
export interface ApiResponse<T> {
  data: T;
  message?: string;
}

/**
 * 分页响应类型
 */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
