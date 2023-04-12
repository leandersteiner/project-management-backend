import * as mongoose from 'mongoose';
import { Model } from 'mongoose';

export class BaseService<T, CreateDto> {
  constructor(
    private model: Model<T>
  ) {
  }

  find = async (id: string): Promise<T> => {
    return this.model.findById(id);
  };

  all = async (params: { skip?: number; take?: number }): Promise<T[]> => {
    const { skip, take } = params;
    return this.model.find().limit(take).skip(skip);
  };

  create = async (data: CreateDto): Promise<T> => {
    return this.model.create(data);
  };

  update = async (params: { id: string; data: T }): Promise<T> => {
    const { id, data } = params;
    return this.model.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data }
    );
  };

  delete = async (id: string): Promise<T> => {
    return this.model.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id)
    });
  };
}
