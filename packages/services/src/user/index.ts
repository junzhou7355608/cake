import type {
  CreateUserInput,
  LoginUserInput,
  UpdateUserInput,
  User,
  UserQuery,
} from '@repo/models';
import {
  safeParseUser,
  validateCreateUser,
  validateLoginUser,
  validateUpdateUser,
  validateUser,
  validateUserQuery,
} from '@repo/models';
import type { PaginatedResponse } from '../types';

/**
 * 用户服务配置
 */
export interface UserServiceConfig {
  baseUrl?: string;
  apiKey?: string;
}

/**
 * 登录响应
 */
export interface LoginResponse {
  user: User;
  token: string;
  refreshToken?: string;
}

/**
 * 用户服务类
 */
export class UserService {
  private baseUrl: string;
  private apiKey?: string;

  constructor(config: UserServiceConfig = {}) {
    this.baseUrl = config.baseUrl || '/api/users';
    this.apiKey = config.apiKey;
  }

  /**
   * 获取请求头
   */
  private getHeaders(): HeadersInit {
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };

    if (this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }

    return headers;
  }

  /**
   * 用户注册
   */
  async register(input: CreateUserInput): Promise<User> {
    const validatedInput = validateCreateUser(input);

    const response = await fetch(`${this.baseUrl}/register`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(validatedInput),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to register: ${error.message || response.statusText}`,
      );
    }

    const data = await response.json();
    return validateUser(data);
  }

  /**
   * 用户登录
   */
  async login(input: LoginUserInput): Promise<LoginResponse> {
    const validatedInput = validateLoginUser(input);

    const response = await fetch(`${this.baseUrl}/login`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify(validatedInput),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to login: ${error.message || response.statusText}`,
      );
    }

    const result = await response.json();
    const parsed = safeParseUser(result.user);

    if (!parsed.success) {
      throw new Error(`Invalid user data: ${parsed.error.message}`);
    }

    return {
      user: parsed.data,
      token: result.token,
      refreshToken: result.refreshToken,
    };
  }

  /**
   * 用户登出
   */
  async logout(): Promise<void> {
    const response = await fetch(`${this.baseUrl}/logout`, {
      method: 'POST',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to logout: ${response.statusText}`);
    }
  }

  /**
   * 获取用户列表
   */
  async getUsers(query?: UserQuery): Promise<PaginatedResponse<User>> {
    const validatedQuery = query ? validateUserQuery(query) : undefined;
    const searchParams = new URLSearchParams();

    if (validatedQuery) {
      Object.entries(validatedQuery).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          searchParams.set(key, String(value));
        }
      });
    }

    const url = `${this.baseUrl}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  }

  /**
   * 根据 ID 获取用户
   */
  async getUserById(id: string): Promise<User> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user: ${response.statusText}`);
    }

    const data = await response.json();
    const parsed = safeParseUser(data);

    if (!parsed.success) {
      throw new Error(`Invalid user data: ${parsed.error.message}`);
    }

    return parsed.data;
  }

  /**
   * 获取当前登录用户
   */
  async getCurrentUser(): Promise<User> {
    const response = await fetch(`${this.baseUrl}/me`, {
      method: 'GET',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch current user: ${response.statusText}`);
    }

    const data = await response.json();
    const parsed = safeParseUser(data);

    if (!parsed.success) {
      throw new Error(`Invalid user data: ${parsed.error.message}`);
    }

    return parsed.data;
  }

  /**
   * 更新用户信息
   */
  async updateUser(id: string, input: UpdateUserInput): Promise<User> {
    const validatedInput = validateUpdateUser(input);

    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(validatedInput),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to update user: ${error.message || response.statusText}`,
      );
    }

    const data = await response.json();
    return validateUser(data);
  }

  /**
   * 更新当前用户信息
   */
  async updateCurrentUser(input: UpdateUserInput): Promise<User> {
    const validatedInput = validateUpdateUser(input);

    const response = await fetch(`${this.baseUrl}/me`, {
      method: 'PATCH',
      headers: this.getHeaders(),
      body: JSON.stringify(validatedInput),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to update user: ${error.message || response.statusText}`,
      );
    }

    const data = await response.json();
    return validateUser(data);
  }

  /**
   * 删除用户
   */
  async deleteUser(id: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/${id}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Failed to delete user: ${response.statusText}`);
    }
  }

  /**
   * 验证邮箱
   */
  async verifyEmail(token: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/verify-email`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to verify email: ${error.message || response.statusText}`,
      );
    }
  }

  /**
   * 发送密码重置邮件
   */
  async requestPasswordReset(email: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/forgot-password`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to request password reset: ${error.message || response.statusText}`,
      );
    }
  }

  /**
   * 重置密码
   */
  async resetPassword(token: string, newPassword: string): Promise<void> {
    const response = await fetch(`${this.baseUrl}/reset-password`, {
      method: 'POST',
      headers: this.getHeaders(),
      body: JSON.stringify({ token, newPassword }),
    });

    if (!response.ok) {
      const error = await response
        .json()
        .catch(() => ({ message: response.statusText }));
      throw new Error(
        `Failed to reset password: ${error.message || response.statusText}`,
      );
    }
  }
}

/**
 * 创建用户服务实例
 */
export function createUserService(config?: UserServiceConfig): UserService {
  return new UserService(config);
}

/**
 * 默认用户服务实例
 */
export const userService = createUserService();
