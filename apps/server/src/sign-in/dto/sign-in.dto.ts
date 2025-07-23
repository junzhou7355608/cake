import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator'

export class SignInDto {
  // 用户账号，要求为非空字符串
  @IsString() // 验证为字符串类型
  @IsNotEmpty() // 验证不能为空
  @MinLength(3) // 最小长度为3个字符
  @MaxLength(20) // 最大长度为20个字符
  username!: string

  // 用户密码，要求为非空字符串，并且至少8个字符
  @IsString() // 验证为字符串类型
  @IsNotEmpty() // 验证不能为空
  @MinLength(8) // 密码至少为8个字符
  password!: string
}
