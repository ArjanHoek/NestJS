import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers(): User[] {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: string): User {
    return this.usersService.getUserById(+id);
  }

  @Post()
  createUser(@Body() body: CreateUserDto): User {
    return this.usersService.createUser(body);
  }
}
