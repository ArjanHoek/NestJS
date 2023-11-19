import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'Flip',
    },
    {
      id: 2,
      name: 'Anna',
    },
    {
      id: 3,
      name: 'Rini',
    },
  ];

  getUsers(name?: string): User[] {
    if (name) {
      return this.users.filter(
        (user) => user.name.toLowerCase() === name.toLowerCase(),
      );
    }
    return this.users;
  }

  getUserById(id: number): User {
    return this.users.find((user) => user.id === id);
  }

  createUser(createUserDto: CreateUserDto): User {
    const newUser = {
      id: this.users[this.users.length - 1].id + 1,
      ...createUserDto,
    };

    this.users.push(newUser);
    return newUser;
  }
}
