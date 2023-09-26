import {
  Body,
  Controller,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response, response } from 'express';
import { CreateUserDto } from 'src/users/dto/CreateUser.dto';
import { UserService } from 'src/users/services/user/user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.listUsers();
  }

  @Get('posts')
  getUserPosts() {
    return [
      {
        username: 'deneme',
        email: 'email.deneme.com',
        posts: [
          {
            id: 1,
            title: 'Deneme1',
          },
        ],
      },
    ];
  }

  @Post()
  @UsePipes(new ValidationPipe()) //for validation
  createUser(@Body() requestBody: CreateUserDto) {
    console.log('Body() is : ', requestBody);
    return this.userService.createUser(requestBody);
  }
  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    //validate parameters
    //Instead of req.params, @Param
    return this.userService.getUserById(id);
  }
}
