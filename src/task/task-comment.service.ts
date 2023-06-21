import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskComment } from './task-comment.entity';
import { User } from '../user/user.entity';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto';
import { UpdateTaskCommentDto } from './dto/update-task-comment.dto';

@Injectable()
export class TaskCommentService {
  constructor(
    @InjectRepository(Task)
    private repository: Repository<TaskComment>
  ) {}

  create = async (
    user: User,
    taskId: string,
    createDto: CreateTaskCommentDto
  ): Promise<TaskComment> => {
    return this.repository.save({
      ...createDto,
      creator: user,
      task: { id: taskId }
    });
  };

  update = async (
    subtaskId: string,
    updateDto: UpdateTaskCommentDto
  ): Promise<TaskComment> => {
    await this.repository.update(subtaskId, updateDto);
    return this.repository.findOneBy({ id: subtaskId });
  };

  delete = async (subtaskId: string): Promise<void> => {
    await this.repository.delete(subtaskId);
  };
}
