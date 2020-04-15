import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/interfaces/user.interface';
import { LoginUserDto } from 'src/user/dto/user.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    public async validateUser(email: string): Promise<User> {
        // Password validation should happen here 
        return await this.userService.findByEmail(email);
    }

    public async signin(loginUserDto: LoginUserDto): Promise<any | { status: number }> {

        return this.validateUser(loginUserDto.email).then((user) => {
            if (!user) {
                return { status: 404 };
            }
            let payload = {
                name: user.name,
                email: user.email,
                dob: user.dob
            };
            const accessToken = this.jwtService.sign(payload);
            return {
                access_token: accessToken,
                payload: payload,
                status: 200
            };

        });
    }
}
