import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  /** 用户邮箱，唯一 */
  @IsEmail()
  email!: string;

  /** 用户名称，可选 */
  @IsOptional()
  @IsString()
  name?: string;
}
