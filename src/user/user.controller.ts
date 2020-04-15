import { Body, Controller, Get, HttpCode, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {

  constructor(
    private userService: UserService,
  ) {
  }

  @Get('findAll')
  findAll() {
    return this.userService.findAll();
  }
}
