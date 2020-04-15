import { Controller, Get, Post, Body, Res, HttpCode, UseGuards, Request } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/user.dto";
import { AuthGuard } from "@nestjs/passport";

@Controller('user')
export class UserController {

    constructor(
        private userService: UserService
    ) { }

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