/** 用户实体，与 Prisma User 模型对应 */
export type User = {
  id: number;
  email: string;
  name: string | null;
};
