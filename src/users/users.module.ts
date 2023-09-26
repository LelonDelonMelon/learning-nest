import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UserService } from './services/user/user.service';

@Module({
  controllers: [UsersController],
  providers: [UserService]
})
export class UsersModule {}
