import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminUsersController } from './users/admin-users.controller';
import { UserModule } from '../../modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AdminController, AdminUsersController],
})
export class AdminModule {}
