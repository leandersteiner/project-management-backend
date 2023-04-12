import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { BoardColumnController } from './board-column.controller';
import { BoardColumnService } from './board-column.service';
import { boardColumnProviders } from './board-column.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BoardColumnController],
  providers: [
    BoardColumnService,
    ...boardColumnProviders
  ]
})
export class BoardColumnModule {}
