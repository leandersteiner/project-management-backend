import { Injectable } from '@nestjs/common';
import { Sprint } from './sprint.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSprintDto } from './dto/create-sprint.dto';
import { UpdateSprintDto } from './dto/update-sprint.dto';

@Injectable()
export class SprintService {
  constructor(
    @InjectRepository(Sprint)
    private readonly repository: Repository<Sprint>
  ) {}

  findAllForProject = async (projectId: string): Promise<Sprint[]> => {
    return this.repository.findBy({ project: { id: projectId } });
  };

  findOne = async (sprintId: string): Promise<Sprint> => {
    return this.repository.findOneBy({ id: sprintId });
  };

  create = async (
    projectId: string,
    createDto: CreateSprintDto
  ): Promise<Sprint> => {
    return this.repository.save({ ...createDto, project: { id: projectId } });
  };

  update = async (
    sprintId: string,
    updateDto: UpdateSprintDto
  ): Promise<Sprint> => {
    await this.repository.update(sprintId, updateDto);
    return this.repository.findOneBy({ id: sprintId });
  };

  delete = async (sprintId: string): Promise<void> => {
    await this.repository.delete(sprintId);
  };
}
