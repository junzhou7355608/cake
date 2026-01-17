import { z } from 'zod';

/**
 * 游戏平台枚举
 */
export const GamePlatformSchema = z.enum([
  'pc',
  'playstation',
  'xbox',
  'nintendo',
  'mobile',
  'web',
  'other',
]);

/**
 * 游戏分类枚举
 */
export const GameGenreSchema = z.enum([
  'action',
  'adventure',
  'rpg',
  'strategy',
  'simulation',
  'sports',
  'racing',
  'puzzle',
  'horror',
  'indie',
  'casual',
  'mmo',
  'fps',
  'platformer',
  'other',
]);

/**
 * 游戏状态枚举
 */
export const GameStatusSchema = z.enum([
  'draft',
  'published',
  'archived',
  'coming_soon',
]);

/**
 * 游戏年龄分级枚举
 */
export const GameRatingSchema = z.enum(['E', 'E10+', 'T', 'M', 'AO', 'RP']);

/**
 * 游戏基础信息 Schema
 */
export const GameBaseSchema = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(200),
  slug: z
    .string()
    .min(1)
    .max(200)
    .regex(/^[a-z0-9-]+$/),
  description: z.string().max(5000).optional().nullable(),
  shortDescription: z.string().max(500).optional().nullable(),
  coverImage: z.string().url().optional().nullable(),
  thumbnail: z.string().url().optional().nullable(),
  screenshots: z.array(z.string().url()).default([]),
  developer: z.string().min(1).max(100),
  publisher: z.string().min(1).max(100).optional().nullable(),
  releaseDate: z.date().or(z.string().datetime()).optional().nullable(),
  price: z.number().nonnegative().optional().nullable(),
  originalPrice: z.number().nonnegative().optional().nullable(),
  isFree: z.boolean().default(false),
  website: z.string().url().optional().nullable(),
  storeUrl: z.string().url().optional().nullable(),
});

/**
 * 游戏完整信息 Schema
 */
export const GameSchema = GameBaseSchema.extend({
  platforms: z.array(GamePlatformSchema).min(1),
  genres: z.array(GameGenreSchema).min(1),
  status: GameStatusSchema.default('draft'),
  rating: GameRatingSchema.optional().nullable(),
  tags: z.array(z.string().min(1).max(30)).default([]),
  averageRating: z.number().min(0).max(10).optional().nullable(),
  ratingCount: z.number().int().nonnegative().default(0),
  viewCount: z.number().int().nonnegative().default(0),
  favoriteCount: z.number().int().nonnegative().default(0),
  createdAt: z.date().or(z.string().datetime()),
  updatedAt: z.date().or(z.string().datetime()),
  publishedAt: z.date().or(z.string().datetime()).optional().nullable(),
  createdBy: z.string().uuid().optional().nullable(),
});

/**
 * 创建游戏输入 Schema
 */
export const CreateGameSchema = GameBaseSchema.omit({
  id: true,
}).extend({
  platforms: z.array(GamePlatformSchema).min(1),
  genres: z.array(GameGenreSchema).min(1),
  status: GameStatusSchema.optional().default('draft'),
  rating: GameRatingSchema.optional().nullable(),
  tags: z.array(z.string().min(1).max(30)).optional().default([]),
  createdBy: z.string().uuid().optional().nullable(),
});

/**
 * 更新游戏输入 Schema
 */
export const UpdateGameSchema = GameBaseSchema.partial().extend({
  platforms: z.array(GamePlatformSchema).min(1).optional(),
  genres: z.array(GameGenreSchema).min(1).optional(),
  status: GameStatusSchema.optional(),
  rating: GameRatingSchema.optional().nullable(),
  tags: z.array(z.string().min(1).max(30)).optional(),
  screenshots: z.array(z.string().url()).optional(),
});

/**
 * 游戏查询参数 Schema
 */
export const GameQuerySchema = z.object({
  platform: GamePlatformSchema.optional(),
  genre: GameGenreSchema.optional(),
  status: GameStatusSchema.optional(),
  isFree: z.boolean().optional(),
  minRating: z.coerce.number().min(0).max(10).optional(),
  maxPrice: z.coerce.number().nonnegative().optional(),
  search: z.string().optional(),
  tags: z.array(z.string()).optional(),
  sortBy: z
    .enum([
      'createdAt',
      'updatedAt',
      'releaseDate',
      'averageRating',
      'viewCount',
      'favoriteCount',
      'price',
      'title',
    ])
    .default('createdAt'),
  sortOrder: z.enum(['asc', 'desc']).default('desc'),
  page: z.coerce.number().int().positive().default(1),
  pageSize: z.coerce.number().int().positive().max(100).default(20),
});

/**
 * 游戏评分输入 Schema
 */
export const GameRatingInputSchema = z.object({
  gameId: z.string().uuid(),
  userId: z.string().uuid(),
  rating: z.number().min(0).max(10),
  comment: z.string().max(2000).optional().nullable(),
});

// 导出类型
export type GamePlatform = z.infer<typeof GamePlatformSchema>;
export type GameGenre = z.infer<typeof GameGenreSchema>;
export type GameStatus = z.infer<typeof GameStatusSchema>;
export type GameRating = z.infer<typeof GameRatingSchema>;
export type Game = z.infer<typeof GameSchema>;
export type GameBase = z.infer<typeof GameBaseSchema>;
export type CreateGameInput = z.infer<typeof CreateGameSchema>;
export type UpdateGameInput = z.infer<typeof UpdateGameSchema>;
export type GameQuery = z.infer<typeof GameQuerySchema>;
export type GameRatingInput = z.infer<typeof GameRatingInputSchema>;

// 导出验证函数
export const validateGame = (data: unknown): Game => {
  return GameSchema.parse(data);
};

export const validateCreateGame = (data: unknown): CreateGameInput => {
  return CreateGameSchema.parse(data);
};

export const validateUpdateGame = (data: unknown): UpdateGameInput => {
  return UpdateGameSchema.parse(data);
};

export const validateGameQuery = (data: unknown): GameQuery => {
  return GameQuerySchema.parse(data);
};

export const validateGameRatingInput = (data: unknown): GameRatingInput => {
  return GameRatingInputSchema.parse(data);
};

// 安全地解析（不抛出异常）
export const safeParseGame = (data: unknown) => {
  return GameSchema.safeParse(data);
};

export const safeParseCreateGame = (data: unknown) => {
  return CreateGameSchema.safeParse(data);
};

export const safeParseUpdateGame = (data: unknown) => {
  return UpdateGameSchema.safeParse(data);
};

export const safeParseGameQuery = (data: unknown) => {
  return GameQuerySchema.safeParse(data);
};
