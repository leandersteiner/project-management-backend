import { Connection } from 'mongoose';
import { BoardColumnSchema } from './board-column.schema';

export const boardColumnProviders = [
  {
    provide: 'BOARD_COLUMN_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('BoardColumn', BoardColumnSchema),
    inject: ['DATABASE_CONNECTION']
  }
];
