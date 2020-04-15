import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';

@Controller('user')
export class UserController {

  constructor(
    private userService: UserService,
  ) {
  }

  @Post('signup')
  @HttpCode(200)
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }

  @Get('test')
  test(): string {
    return 'This is a test from server!!';
  }
}
