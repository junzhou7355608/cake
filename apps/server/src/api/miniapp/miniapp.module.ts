import { Module } from '@nestjs/common';
import { MiniappController } from './miniapp.controller';
import { MiniappUsersController } from './users/miniapp-users.controller';
import { UserModule } from '../../modules/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [MiniappController, MiniappUsersController],
})
export class MiniappModule {}
