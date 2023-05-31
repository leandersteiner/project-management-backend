import { Injectable } from '@nestjs/common';
import { BoardColumn } from './board-column.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardColumnDto } from './dto/create-board-column.dto';
import { BoardService } from './board.service';
import { UpdateBoardColumnDto } from './dto/update-board-column.dto';

@Injectable()
export class BoardColumnService {
  constructor(
    @InjectRepository(BoardColumn)
    private readonly repository: Repository<BoardColumn>,
    private readonly boardService: BoardService
  ) {}

  getAllForProject = async (projectId: string): Promise<BoardColumn[]> => {
    return this.repository.findBy({ board: { project: { id: projectId } } });
  };

  getOneInProject = async (
    projectId: string,
    columnId: string
  ): Promise<BoardColumn> => {
    return this.repository.findOneBy({
      id: columnId,
      board: { project: { id: projectId } }
    });
  };

  createInProject = async (
    projectId: string,
    createDto: CreateBoardColumnDto
  ): Promise<BoardColumn> => {
    const board = await this.boardService.getForProject(projectId);
    return this.repository.save({ ...createDto, board });
  };

  update = async (
    columnId: string,
    updateDto: UpdateBoardColumnDto
  ): Promise<BoardColumn> => {
    await this.repository.update(columnId, updateDto);
    return this.repository.findOneBy({ id: columnId });
  };

  delete = async (columnId: string): Promise<void> => {
    await this.repository.delete(columnId);
  };
}
