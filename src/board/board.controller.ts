import { Controller } from '@nestjs/common';
import { BaseController } from '../common/base.controller';
import { Board } from './board.schema';
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';
import { BoardService } from './board.service';

@Controller('boards')
export class BoardController extends BaseController<
  Board,
  CreateBoardDto,
  UpdateBoardDto
> {
  constructor(private readonly boardService: BoardService) {
    super(boardService);
  }
}
