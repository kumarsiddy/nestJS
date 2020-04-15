import { Controller, Request, Post, UseGuards, Get, forwardRef, Inject, Body } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { LoginUserDto } from './user/dto/user.dto';

@Controller()
export class AppController {

    constructor(private readonly authService: AuthService) { }

    @Post('signin')
    async login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.signin(loginUserDto);
    }
}