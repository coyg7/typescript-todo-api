import * as dotenv from 'dotenv';
import { name, version } from '../../package.json';

dotenv.config();

const isTestEnvironment = process.env.NODE_ENV === 'test';
const APP_PORT = (isTestEnvironment && 8888) || process.env.APP_PORT || 8080;

export default {
  app: {
    name: name || 'typescript-express-api-starter',
    version: version || '1.0.0',
    port: APP_PORT || '8000',
    host: process.env.APP_HOST || '127.0.0.1',
    baseUrl: process.env.APP_URL || 'http://127.0.0.1:8000/api'
  },
  database: {
    client: process.env.DB_CLIENT || 'mssql',
    connection: {
      charset: 'utf8',
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST || '127.0.0.1'
    },
    migrations: {
      tableName: 'migrations',
      directory: './migrations',
      stub: './stubs/migration.stub'
    },
    seeds: {
      directory: './seeds',
      stub: './stubs/seed.stub'
    }
  },
  pagination: {
    maxRows: 20,
    page: 1
  }
};
