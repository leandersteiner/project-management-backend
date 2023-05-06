import { Injectable } from '@nestjs/common';
import { Sprint } from './sprint.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SprintService {
  constructor(
    @InjectRepository(Sprint)
    private readonly repository: Repository<Sprint>
  ) {}
}
