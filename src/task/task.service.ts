import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { IsNull, Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>
  ) {}

  allForProject = async (projectId: string): Promise<Task[]> => {
    return this.repository.findBy({
      boardColumn: { board: { project: { id: projectId } } }
    });
  };

  oneForProject = async (taskId: string): Promise<Task> => {
    return this.repository.findOneBy({ id: taskId });
  };

  allForColumn = async (columnId: string): Promise<Task[]> => {
    return this.repository.findBy({ boardColumn: { id: columnId } });
  };

  create = async (
    user: User,
    projectId: string,
    createDto: CreateTaskDto
  ): Promise<Task> => {
    return this.repository.save({ ...createDto, creator: user });
  };

  createInColumn = async (
    user: User,
    columnId: string,
    createDto: CreateTaskDto
  ): Promise<Task> => {
    return this.repository.save({
      ...createDto,
      creator: user,
      boardColumn: { id: columnId }
    });
  };

  update = async (taskId: string, updateDto: UpdateTaskDto): Promise<Task> => {
    await this.repository.update(taskId, updateDto);
    return await this.repository.findOneBy({ id: taskId });
  };

  delete = async (taskId: string): Promise<void> => {
    await this.repository.delete(taskId);
  };

  allInBacklogForProject(projectId: string) {
    return this.repository.find({
      where: { projectId, boardColumnId: IsNull() }
    });
  }
}
