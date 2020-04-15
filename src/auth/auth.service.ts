import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {
  }

  public async validateUser(email: string): Promise<User> {
    // Password validation should happen here
    return await this.userService.findByEmail(email);
  }

  public async signin(user: User): Promise<any | { status: number }> {
    return this.validateUser(user.email).then((user) => {
      if (!user) {
        return { status: 404 };
      }
      const payload = {
        email: user.email,
      };
      const accessToken = this.jwtService.sign(payload);
      return {
        token: accessToken,
      };

    });
  }
}
