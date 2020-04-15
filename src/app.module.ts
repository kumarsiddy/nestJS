import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'
import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { DB_URL } from './user/constants/constants';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [MongooseModule.forRoot(DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }),
    UserModule,
    AuthModule
  ],
})
export class AppModule { }
