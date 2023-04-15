import { Injectable } from '@nestjs/common';
import { BaseService } from '../common/base.service';
import { Task } from './task.schema';
import { CreateTaskStateDto } from '../task-state/dto/create-task-state.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class TaskService extends BaseService<
  Task,
  CreateTaskStateDto,
  UpdateTaskDto
> {
  constructor(
    @InjectModel(Task.name)
    private taskModel: Model<Task>
  ) {
    super(taskModel);
  }

  findRel = async (id: string): Promise<Task> => {
    const task = this.taskModel.findById(id).populate(['assignee', 'column']);
    task.populate('state');
    task.populate('sprint');
    return task;
  };
}
