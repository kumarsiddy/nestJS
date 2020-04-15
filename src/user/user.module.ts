import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './shema/user.schema';
import { USER_COLLECTION } from './constants/constants';


@Module({
  imports: [MongooseModule.forFeature([{ name: USER_COLLECTION, schema: UserSchema }])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
}
