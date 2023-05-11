import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { BoardColumn } from '../board-column/board-column.entity';

@Controller('projects/:projectId/board')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async getBoard(): Promise<Board> {
    return this.boardService.get();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/columns')
  async getAllForBoard(): Promise<BoardColumn[]> {
    return this.boardService.getBoardColumns();
  }

  @HttpCode(HttpStatus.OK)
  @Get('/columns/:columnId')
  async getColumn(): Promise<BoardColumn[]> {
    return this.boardService.getBoardColumn('columnId');
  }
}
