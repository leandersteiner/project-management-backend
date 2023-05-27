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

  delete = async (id: string): Promise<void> => {
    await this.repository.delete({ id: id });
  };
}
