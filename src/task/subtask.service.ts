import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import { CreateSubtaskDto } from './dto/create-subtask.dto';
import { Subtask } from './subtask.entity';
import { UpdateSubtaskDto } from './dto/update-subtask.dto';

@Injectable()
export class SubtaskService {
  constructor(
    @InjectRepository(Subtask)
    private repository: Repository<Subtask>
  ) {}

  create = async (
    user: User,
    taskId: string,
    createDto: CreateSubtaskDto
  ): Promise<Subtask> => {
    return this.repository.save({
      done: false,
      ...createDto,
      creator: user,
      task: { id: taskId }
    });
  };

  update = async (
    subtaskId: string,
    updateDto: UpdateSubtaskDto
  ): Promise<Subtask> => {
    await this.repository.update(subtaskId, updateDto);
    return this.repository.findOneBy({ id: subtaskId });
  };

  delete = async (subtaskId: string): Promise<void> => {
    await this.repository.delete(subtaskId);
  };
}
