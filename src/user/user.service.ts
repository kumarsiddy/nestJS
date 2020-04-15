import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { CreateUserDto } from './dto/user.dto';
import { USER_COLLECTION } from './constants/constants';


@Injectable()
export class UserService {

  constructor(
    @InjectModel(USER_COLLECTION) private readonly userRepo: Model<User>,
  ) {
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createUser = new this.userRepo(createUserDto);
    return createUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userRepo.find().exec();
  }

  public async findByEmail(email: string): Promise<User> {
    return this.userRepo.findOne({ email: email });
  }

}
