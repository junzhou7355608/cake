import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';
import { UpdateUserDto } from '@modules/user/dto/update-user.dto';
import { AdminAuthGuard } from '@common/auth/guards/admin-auth.guard';
import { Public } from '@common/auth/decorators/public.decorator';

/**
 * 管理后台 - 用户管理接口
 * 路由: /api/admin/users
 * 特点: 完整 CRUD，需管理员权限
 *
 * TODO: 接入 AdminAuthGuard 后，移除此处的 @Public()
 */
@Controller('admin/users')
@UseGuards(AdminAuthGuard)
@Public() // 开发阶段临时开放，接入认证后移除
export class AdminUsersController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
