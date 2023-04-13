import { Module } from '@nestjs/common';
import { BoardColumnController } from './board-column.controller';
import { BoardColumnService } from './board-column.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardColumn, BoardColumnSchema } from './board-column.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BoardColumn.name, schema: BoardColumnSchema }
    ])
  ],
  controllers: [BoardColumnController],
  providers: [BoardColumnService]
})
export class BoardColumnModule {}
