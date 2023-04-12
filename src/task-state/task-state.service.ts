import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { TaskState } from './task-state.schema';
import { CreateTaskStateDto } from './dto/create-task-state.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskStateService extends BaseService<TaskState, CreateTaskStateDto> {
  constructor(
    @InjectModel(TaskState.name)
    private taskStateModel: Model<TaskState>
  ) {
    super(taskStateModel);
  }
}
