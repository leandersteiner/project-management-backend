import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskComment } from './task-comment.entity';
import { User } from '../user/user.entity';
import { CreateTaskCommentDto } from './dto/create-task-comment.dto';
import { UpdateTaskCommentDto } from './dto/update-task-comment.dto';

@Injectable()
export class TaskCommentService {
  constructor(
    @InjectRepository(TaskComment)
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
    taskCommentId: string,
    updateDto: UpdateTaskCommentDto
  ): Promise<TaskComment> => {
    await this.repository.update(taskCommentId, updateDto);
    return this.repository.findOneBy({ id: taskCommentId });
  };

  delete = async (taskCommentId: string): Promise<void> => {
    await this.repository.delete(taskCommentId);
  };
}
