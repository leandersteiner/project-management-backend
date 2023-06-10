import { Injectable } from '@nestjs/common';
import { TaskState } from './task-state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskStateDto } from './dto/create-task-state.dto';

@Injectable()
export class TaskStateService {
  constructor(
    @InjectRepository(TaskState)
    private readonly repository: Repository<TaskState>
  ) {}

  findById = async (id: string): Promise<TaskState> => {
    return this.repository.findOneBy({ id: id });
  };

  create = async (createDto: CreateTaskStateDto): Promise<TaskState> => {
    return this.repository.save(createDto);
  };

  createDefaultForProject = async (
    projectId: string
  ): Promise<{
    inProgress: TaskState;
    inReview: TaskState;
    done: TaskState;
  }> => {
    const inProgress = await this.repository.save({
      name: 'In progress',
      project: { id: projectId }
    });
    const inReview = await this.repository.save({
      name: 'In review',
      project: { id: projectId }
    });
    const done = await this.repository.save({
      name: 'Done',
      project: { id: projectId }
    });
    return { inProgress, inReview, done };
  };

  delete = async (id: string): Promise<void> => {
    await this.repository.delete({ id: id });
  };
}
