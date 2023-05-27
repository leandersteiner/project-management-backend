import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardColumn } from './board-column.entity';
import { BoardColumnController } from './board-column.controller';
import { BoardColumnService } from './board-column.service';

@Module({
  imports: [TypeOrmModule.forFeature([Board, BoardColumn])],
  controllers: [BoardController, BoardColumnController],
  providers: [BoardService, BoardColumnService]
})
export class BoardModule {}
