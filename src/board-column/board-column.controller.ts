import { Controller } from '@nestjs/common';
import { BaseController } from '../common/base.controller';
import { BoardColumn } from './board-column.schema';
import { CreateBoardColumnDto } from './dto/create-board-column.dto';
import { UpdateBoardColumnDto } from './dto/update-board-column.dto';
import { BoardColumnService } from './board-column.service';

@Controller('board-columns')
export class BoardColumnController extends BaseController<
  BoardColumn,
  CreateBoardColumnDto,
  UpdateBoardColumnDto
> {
  constructor(private readonly boardColumnService: BoardColumnService) {
    super(boardColumnService);
  }
}
