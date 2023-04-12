import { Connection } from 'mongoose';
import { TaskStateSchema } from './task-state.schema';

export const taskStateProviders = [
  {
    provide: 'TASK_STATE_MODEL',
    useFactory: (connection: Connection) => connection.model('TaskState', TaskStateSchema),
    inject: ['DATABASE_CONNECTION']
  }
];