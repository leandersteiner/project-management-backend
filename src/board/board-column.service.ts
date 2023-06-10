import { Injectable } from '@nestjs/common';
import { BoardColumn } from './board-column.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardColumnDto } from './dto/create-board-column.dto';
import { UpdateBoardColumnDto } from './dto/update-board-column.dto';
import { TaskState } from '../task/task-state.entity';
import { Board } from './board.entity';

@Injectable()
export class BoardColumnService {
  constructor(
    @InjectRepository(BoardColumn)
    private readonly repository: Repository<BoardColumn>,
    @InjectRepository(Board)
    private readonly boardRepository: Repository<Board>
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
    const board = await this.boardRepository.findOneBy({
      project: { id: projectId }
    });
    return this.repository.save({ ...createDto, board });
  };

  createDefaultInProject = async (
    projectId: string,
    taskStates: {
      inProgress: TaskState;
      inReview: TaskState;
      done: TaskState;
    },
    board: Board
  ): Promise<BoardColumn[]> => {
    const boardColumns: BoardColumn[] = [];
    boardColumns.push(
      await this.repository.save({
        title: 'In progress',
        state: taskStates.inProgress,
        board: board
      })
    );
    boardColumns.push(
      await this.repository.save({
        title: 'In review',
        state: taskStates.inReview,
        board: board
      })
    );
    boardColumns.push(
      await this.repository.save({
        title: 'Done',
        state: taskStates.done,
        board: board
      })
    );
    return boardColumns;
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
