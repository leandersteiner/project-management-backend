import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { BaseService } from '../common/base.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService extends BaseService<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>
  ) {
    super(userModel);
  }

  findByUsername = async (username: string): Promise<User> => {
    return this.userModel.findOne({
      username: username
    });
  };

  findMultiple = async (ids: string[]): Promise<User[]> => {
    return this.userModel.find().where('_id').in(ids).exec();
  };
}
