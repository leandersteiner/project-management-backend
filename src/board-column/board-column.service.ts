import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { BoardColumn } from './board-column.schema';
import { CreateBoardColumnDto } from './dto/create-board-column.dto';
import { UpdateBoardColumnDto } from './dto/update-board-column.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BoardColumnService extends BaseService<
  BoardColumn,
  CreateBoardColumnDto,
  UpdateBoardColumnDto
> {
  constructor(
    @InjectModel(BoardColumn.name)
    private boardColumnModel: Model<BoardColumn>
  ) {
    super(boardColumnModel);
  }
}
