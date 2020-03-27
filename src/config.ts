import path from 'path';
import dotenvSafe from 'dotenv-safe';

dotenvSafe.config();

let ENV = process.env;

let dBdevelopment = ENV.MONGO_URL || 'mongodb://localhost/database';
let dBproduction = ENV.MONGO_URL || 'mongodb://localhost/database';

export let databaseConfig =
  ENV.NODE_ENV === 'production' ? dBproduction : dBdevelopment;

export let GRAPHQL_PORT = ENV.GRAPHQL_PORT || '8000';
