import { z } from 'zod';

/**
 * 用户角色枚举
 */
export const UserRoleSchema = z.enum(['user', 'admin', 'moderator']);

/**
 * 用户状态枚举
 */
export const UserStatusSchema = z.enum([
  'active',
  'inactive',
  'suspended',
  'banned',
]);

/**
 * 用户基础信息 Schema
 */
export const UserBaseSchema = z.object({
  id: z.string().uuid(),
  username: z
    .string()
    .min(3)
    .max(30)
    .regex(/^[a-zA-Z0-9_-]+$/),
  email: z.string().email(),
  displayName: z.string().min(1).max(50).optional(),
  avatar: z.string().url().optional().nullable(),
  bio: z.string().max(500).optional().nullable(),
});

/**
 * 用户完整信息 Schema（包含认证和状态信息）
 */
export const UserSchema = UserBaseSchema.extend({
  role: UserRoleSchema.default('user'),
  status: UserStatusSchema.default('active'),
  emailVerified: z.boolean().default(false),
  createdAt: z.date().or(z.string().datetime()),
  updatedAt: z.date().or(z.string().datetime()),
  lastLoginAt: z.date().or(z.string().datetime()).optional().nullable(),
});

/**
 * 创建用户输入 Schema（不包含自动生成的字段）
 */
export const CreateUserSchema = UserBaseSchema.omit({
  id: true,
}).extend({
  password: z.string().min(8).max(100),
  role: UserRoleSchema.optional().default('user'),
});

/**
 * 更新用户输入 Schema（所有字段可选）
 */
export const UpdateUserSchema = UserBaseSchema.partial().extend({
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  emailVerified: z.boolean().optional(),
});

/**
 * 用户登录输入 Schema
 */
export const LoginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

/**
 * 用户查询参数 Schema
 */
export const UserQuerySchema = z.object({
  role: UserRoleSchema.optional(),
  status: UserStatusSchema.optional(),
  emailVerified: z.boolean().optional(),
  search: z.string().optional(),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),
});

// 导出类型
export type UserRole = z.infer<typeof UserRoleSchema>;
export type UserStatus = z.infer<typeof UserStatusSchema>;
export type User = z.infer<typeof UserSchema>;
export type UserBase = z.infer<typeof UserBaseSchema>;
export type CreateUserInput = z.infer<typeof CreateUserSchema>;
export type UpdateUserInput = z.infer<typeof UpdateUserSchema>;
export type LoginUserInput = z.infer<typeof LoginUserSchema>;
export type UserQuery = z.infer<typeof UserQuerySchema>;

// 导出验证函数
export const validateUser = (data: unknown): User => {
  return UserSchema.parse(data);
};

export const validateCreateUser = (data: unknown): CreateUserInput => {
  return CreateUserSchema.parse(data);
};

export const validateUpdateUser = (data: unknown): UpdateUserInput => {
  return UpdateUserSchema.parse(data);
};

export const validateLoginUser = (data: unknown): LoginUserInput => {
  return LoginUserSchema.parse(data);
};

export const validateUserQuery = (data: unknown): UserQuery => {
  return UserQuerySchema.parse(data);
};

// 安全地解析（不抛出异常）
export const safeParseUser = (data: unknown) => {
  return UserSchema.safeParse(data);
};

export const safeParseCreateUser = (data: unknown) => {
  return CreateUserSchema.safeParse(data);
};

export const safeParseUpdateUser = (data: unknown) => {
  return UpdateUserSchema.safeParse(data);
};
