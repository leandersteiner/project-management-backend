import * as mongoose from 'mongoose';
import { Model } from 'mongoose';
import { Inject, Injectable } from '@nestjs/common';
import { Board } from './board.interface';

@Injectable()
export class BoardService {
  constructor(
    @Inject('BOARD_MODEL')
    private boardModel: Model<Board>
  ) {}

  find = async (id: string): Promise<Board> => {
    return this.boardModel.findById(id);
  };

  all = async (params: { skip?: number; take?: number }): Promise<Board[]> => {
    const { skip, take } = params;
    return this.boardModel.find().limit(take).skip(skip);
  };

  create = async (data: Board): Promise<Board> => {
    return this.boardModel.create(data);
  };

  update = async (params: { id: string; data: Board }): Promise<Board> => {
    const { id, data } = params;
    return this.boardModel.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: data }
    );
  };

  delete = async (id: string): Promise<Board> => {
    return this.boardModel.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id)
    });
  };
}
