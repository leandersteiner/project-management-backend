import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Board } from './board.schema';
import { BaseService } from '../common/base.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class BoardService extends BaseService<
  Board,
  CreateBoardDto,
  UpdateBoardDto
> {
  constructor(
    @InjectModel(Board.name)
    private boardModel: Model<Board>
  ) {
    super(boardModel);
  }
}
