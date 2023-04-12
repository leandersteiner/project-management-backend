import { Connection } from 'mongoose';
import { TeamSchema } from './team.schema';

export const teamProviders = [
  {
    provide: 'TEAM_MODEL',
    useFactory: (connection: Connection) => connection.model('Team', TeamSchema),
    inject: ['DATABASE_CONNECTION']
  }
];