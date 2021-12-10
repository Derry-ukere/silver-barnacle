import path from 'path';
import { ConnectionOptions } from 'typeorm';

export const connectionOptions : ConnectionOptions = {
    type: 'postgres',
    host: process.env.HOST2,
    port: Number(process.env.DBPORT2),
    username: process.env.USERNAME2,
    password: process.env.PASSWORD2,
    database: process.env.DATABASE2,
    synchronize: false, 
    ssl: {
      rejectUnauthorized: false, 
    },
    logging: false,
    entities: [path.join(__dirname, '../**/*.entity{.ts,.js}')],
    migrations: [path.join(__dirname, '../migration/*{.ts,.js}')],
    subscribers: [path.join(__dirname, '../**/*.subscriber{.ts,.js}')],
    cli: {
      entitiesDir: 'src/entity',
      migrationsDir: 'src/migration',
      subscribersDir: 'src/subscriber',
    },
}