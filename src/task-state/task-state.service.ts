import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { TaskState } from './task-state.schema';
import { CreateTaskStateDto } from './dto/create-task-state.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { UpdateTaskStateDto } from './dto/update-task-state.dto';

@Injectable()
export class TaskStateService extends BaseService<
  TaskState,
  CreateTaskStateDto,
  UpdateTaskStateDto
> {
  constructor(
    @InjectModel(TaskState.name)
    private taskStateModel: Model<TaskState>
  ) {
    super(taskStateModel);
  }
}
