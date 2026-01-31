export class CreateUserDto {
  /** 用户邮箱，唯一 */
  email: string;
  /** 用户名称，可选 */
  name?: string;
}
