import { Injectable } from '@nestjs/common';
import { Board } from './board.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BoardColumnService } from './board-column.service';
import { TaskStateService } from '../task/task-state.service';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private readonly repository: Repository<Board>,
    private readonly taskStateService: TaskStateService,
    private readonly boardColumnService: BoardColumnService
  ) {}

  getForProject = async (projectId: string): Promise<Board> => {
    return this.repository.findOneBy({ project: { id: projectId } });
  };

  createForProject = async (projectId: string): Promise<Board> => {
    const board = await this.repository.save({
      title: 'TaskBoard',
      project: { id: projectId }
    });
    const defaultTaskStates =
      await this.taskStateService.createDefaultForProject(projectId);
    await this.boardColumnService.createDefaultInProject(
      projectId,
      defaultTaskStates,
      board
    );
    return board;
  };
}
