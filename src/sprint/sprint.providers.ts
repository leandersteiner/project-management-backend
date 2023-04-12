import { Connection } from 'mongoose';
import { SprintSchema } from './sprint.schema';

export const sprintProviders = [
  {
    provide: 'SPRINT_MODEL',
    useFactory: (connection: Connection) => connection.model('Sprint', SprintSchema),
    inject: ['DATABASE_CONNECTION']
  }
];