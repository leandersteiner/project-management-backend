import { Controller } from '@nestjs/common';
import { BoardColumnService } from './board-column.service';

@Controller('board-columns')
export class BoardColumnController {
  constructor(private readonly boardColumnService: BoardColumnService) {}
}
