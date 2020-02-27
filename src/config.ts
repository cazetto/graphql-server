import path from 'path';
import dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

const ENV = process.env;

const dBdevelopment = ENV.MONGO_URL || 'mongodb://localhost/database';
const dBproduction = ENV.MONGO_URL || 'mongodb://localhost/database';

export const databaseConfig =
  ENV.NODE_ENV === 'production' ? dBproduction : dBdevelopment;

export const GRAPHQL_PORT = ENV.GRAPHQL_PORT || '8000';
