// eslint-disable-next-line import/no-extraneous-dependencies
import { createClient } from '@libsql/client';
import dotenv from 'dotenv';
dotenv.config();

// Initialise the Turso client
const tursoDatabaseUrl = process.env.TURSO_DATABASE_URL as string;
const tursoAuthToken = process.env.TURSO_AUTH_TOKEN as string;

// Initialise the Turso client

// console.log({ url: tursoDatabaseUrl, authToken: tursoAuthToken });

export const turso = createClient({
  url: tursoDatabaseUrl,
  authToken: tursoAuthToken,
});
