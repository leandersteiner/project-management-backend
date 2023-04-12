import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb://mongo:mongo@db:27017', {
        dbName: 'mauwss2023'
      })
  }
];
