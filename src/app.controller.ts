import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local.strategy';
import { CreateUserDto } from './user/dto/user.dto';
import { UserService } from './user/user.service';

@Controller()
export class AppController {

  constructor(
    private readonly authService: AuthService,
    private readonly  userService: UserService,
  ) {
  }

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signin(@Request() req) {
    return this.authService.signin(req.user);
  }

  @Post('signup')
  @HttpCode(200)
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userService.create(createUserDto);
  }

}
