import { Module } from '@nestjs/common';
import { BoardColumnController } from './board-column.controller';
import { BoardColumnService } from './board-column.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardColumn } from './board-column.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BoardColumn])],
  controllers: [BoardColumnController],
  providers: [BoardColumnService]
})
export class BoardColumnModule {}
