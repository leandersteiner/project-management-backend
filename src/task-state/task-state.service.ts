import { Injectable } from '@nestjs/common';
import { TaskState } from './task-state.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TaskStateService {
  constructor(
    @InjectRepository(TaskState)
    private readonly repository: Repository<TaskState>
  ) {}
}
