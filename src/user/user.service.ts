import { Inject, Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>
  ) {}

  find = async (id: string): Promise<User> => {
    return this.userModel.findById(id);
  };

  all = async (params: { skip?: number; take?: number }): Promise<User[]> => {
    const { skip, take } = params;
    return this.userModel.find().limit(take).skip(skip);
  };

  create = async (data: CreateUserDto): Promise<User> => {
    return this.userModel.create(data);
  };

  update = async (params: { id: string; data: User }): Promise<User> => {
    const { id, data } = params;
    return this.userModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data }
    );
  };

  delete = async (id: string): Promise<User> => {
    return this.userModel.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id)
    });
  };
}
