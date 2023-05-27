import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskComment } from './task-comment.entity';

@Injectable()
export class TaskCommentService {
  constructor(
    @InjectRepository(Task)
    private repository: Repository<TaskComment>
  ) {}

  findRel = async (id: string): Promise<TaskComment> => {
    return this.repository.findOneBy({ id: id });
  };
}
