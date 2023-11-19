import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Flipje Flinkers',
    },
    {
      id: 2,
      name: 'Anna Anderlecht',
    },
    {
      id: 3,
      name: 'Rini Rinsema',
    },
  ];

  getUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {
      id: this.users[this.users.length].id + 1,
      ...createUserDto,
    };

    this.users.push();
    return newUser;
  }
}
