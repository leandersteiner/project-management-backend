import { Injectable } from '@nestjs/common';
import { BoardColumn } from './board-column.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BoardColumnService {
  constructor(
    @InjectRepository(BoardColumn)
    private readonly repository: Repository<BoardColumn>
  ) {}
}
