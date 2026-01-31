import { Body, Controller, Get, Patch, UseGuards } from '@nestjs/common';
import { MiniappAuthGuard } from '@common/auth/guards/miniapp-auth.guard';
import { CurrentUser } from '@common/decorators/current-user.decorator';
import { UpdateUserDto } from '@modules/user/dto/update-user.dto';
import { UserService } from '@modules/user/user.service';
/**
 * 小程序端 - 用户相关接口
 * 路由: /api/miniapp/users
 * 特点: 仅操作当前登录用户自身数据
 */
@Controller('miniapp/users')
@UseGuards(MiniappAuthGuard)
export class MiniappUsersController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  getProfile(@CurrentUser('id') userId: number) {
    return this.userService.findOne(userId);
  }

  @Patch('me')
  updateProfile(
    @CurrentUser('id') userId: number,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.update(userId, updateUserDto);
  }
}
