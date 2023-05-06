import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private repository: Repository<Task>
  ) {}

  findRel = async (id: string): Promise<Task> => {
    return this.repository.findOneBy({ id: id });
  };
}
