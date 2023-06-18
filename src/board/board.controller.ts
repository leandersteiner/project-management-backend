import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { BoardService } from './board.service';
import { Board } from './board.entity';
import { BoardColumn } from './board-column.entity';
import { BoardColumnService } from './board-column.service';
import { AuthGuard } from '../auth/auth.guard';
import { CreateBoardColumnDto } from './dto/create-board-column.dto';
import { UpdateBoardColumnDto } from './dto/update-board-column.dto';

@UseGuards(AuthGuard)
@Controller('projects/:projectId/board')
export class BoardController {
  constructor(
    private readonly boardService: BoardService,
    private readonly boardColumnService: BoardColumnService
  ) {}

  @HttpCode(HttpStatus.OK)
  @Get('/')
  async getBoard(@Param('projectId') projectId: string): Promise<Board> {
    return this.boardService.getForProject(projectId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/columns')
  async getAllColumns(
    @Param('projectId') projectId: string
  ): Promise<BoardColumn[]> {
    return this.boardColumnService.getAllForProject(projectId);
  }

  @HttpCode(HttpStatus.OK)
  @Get('/columns/:columnId')
  async getColumn(
    @Param('projectId') projectId: string,
    @Param('columnId') columnId: string
  ): Promise<BoardColumn> {
    return this.boardColumnService.getOneInProject(projectId, columnId);
  }

  @HttpCode(HttpStatus.OK)
  @Post('/columns')
  async createColumn(
    @Param('projectId') projectId: string,
    @Body() createDto: CreateBoardColumnDto
  ): Promise<BoardColumn> {
    return this.boardColumnService.createInProject(projectId, createDto);
  }

  @HttpCode(HttpStatus.OK)
  @Patch('/columns/:columnId')
  async updatedColumn(
    @Param('columnId') columnId: string,
    @Body() updateDto: UpdateBoardColumnDto
  ): Promise<BoardColumn> {
    return this.boardColumnService.update(columnId, updateDto);
  }

  @HttpCode(HttpStatus.OK)
  @Delete('/columns/:columnId')
  async deleteColumn(@Param('columnId') columnId: string): Promise<void> {
    return this.boardColumnService.delete(columnId);
  }
}
