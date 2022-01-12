import { Pool } from "pg";
import * as dotenv from "dotenv"; // Used to get data in .env
dotenv.config();

export const db = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false,
    },
});