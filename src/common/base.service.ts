import * as mongoose from 'mongoose';
import { Model } from 'mongoose';

export class BaseService<DataModel, CreateDto, UpdateDto> {
  constructor(
    private model: Model<DataModel>
  ) {
  }

  find = async (id: string): Promise<DataModel> => {
    return this.model.findById(id);
  };

  all = async (params: { skip?: number; take?: number }): Promise<DataModel[]> => {
    const { skip, take } = params;
    return this.model.find().limit(take).skip(skip);
  };

  create = async (createDto: CreateDto): Promise<DataModel> => {
    return this.model.create(createDto);
  };

  update = async (id: string, updateDto: UpdateDto): Promise<DataModel> => {
    return this.model.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: updateDto }
    );
  };

  delete = async (id: string): Promise<DataModel> => {
    return this.model.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id)
    });
  };
}
