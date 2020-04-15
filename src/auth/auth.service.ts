import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    public async validateUser(email: string): Promise<User> {
        return await this.userService.findByEmail(email);
    }

    public async login(user: User): Promise<any | { status: number }> {
        return this.validateUser(user.email).then((userData) => {
            if (!userData) {
                return { status: 404 };
            }
            let payload = `${userData.name}${userData.id}`;
            const accessToken = this.jwtService.sign(payload);

            return {
                expires_in: 3600,
                access_token: accessToken,
                user_id: payload,
                status: 200
            };

        });
    }

    public async register(user: User): Promise<any> {
        return this.userService.create(user)
    }
}
