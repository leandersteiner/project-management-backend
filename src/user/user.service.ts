import { Injectable } from '@nestjs/common';
import { User } from './user.schema';
import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>
  ) {
  }

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
