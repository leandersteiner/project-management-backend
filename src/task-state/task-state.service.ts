import { Inject, Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { TaskState } from './task-state.interface';
import { CreateTaskStateDto } from './dto/create-task-state.dto';
import { Model } from 'mongoose';

@Injectable()
export class TaskStateService extends BaseService<TaskState, CreateTaskStateDto> {
  constructor(
    @Inject('TASK_STATE_MODEL')
    private taskStateModel: Model<TaskState>
  ) {
    super(taskStateModel);
  }
}
