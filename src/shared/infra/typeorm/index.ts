import { Registration } from '@modules/registrations/infra/typeorm/models/Registration';
import { Role } from '@modules/roles/infra/typeorm/models/Role';
import { User } from '@modules/users/infra/typeorm/models/User';
import { UserToken } from '@modules/users/infra/typeorm/models/UserToken';
import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';

const dataSourceOptions: DataSourceOptions = {
  name: process.env.POSTGRES_DB_NAME,
  type: 'postgres',
  url: process.env.DATABASE_URL,
  ssl:
    process.env.ENVIRONMENT === 'prod' ? { rejectUnauthorized: false } : false,
  entities: [User, Role, Registration, UserToken],
  migrations: [`./dist/src/shared/infra/typeorm/migrations/*.js`],
};

export const AppDataSource = new DataSource(dataSourceOptions);
