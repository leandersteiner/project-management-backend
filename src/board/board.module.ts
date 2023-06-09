import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { BoardColumn } from './board-column.entity';
import { BoardColumnService } from './board-column.service';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Board, BoardColumn]), UserModule],
  controllers: [BoardController],
  providers: [BoardService, BoardColumnService]
})
export class BoardModule {}
