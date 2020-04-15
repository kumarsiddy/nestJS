import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {

  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(email: string, password: string): Promise<any> {
    console.log(email);
    const user = await this.authService.validateUser(email);
    console.log(user);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}