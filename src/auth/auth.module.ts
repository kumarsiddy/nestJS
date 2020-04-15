import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt'
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JWT_SECRET } from 'src/constants/constants';
import { PassportModule, PassportStrategy } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [
        UserModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false
        }),
        JwtModule.register({
            secret: JWT_SECRET,
            signOptions: { expiresIn: '7d' }
        })
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [PassportModule, LocalStrategy, AuthService]
})
export class AuthModule { }
