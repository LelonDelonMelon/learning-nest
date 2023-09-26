import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UserService {
  private fakeUsers = [
    { username: 'Deneme 1', email: 'deneme1@gmail.com' },
    { username: 'Deneme 2', email: 'deneme2@gmail.com' },
    { username: 'Deneme 3', email: 'deneme3@gmail.com' },
  ];

  listUsers() {
    return this.fakeUsers;
  }
  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
  }
  getUserById(id: number) {
    //search the db for that id and return

    return id;
  }
}
