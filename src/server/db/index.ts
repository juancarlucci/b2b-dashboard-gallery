import { drizzle } from "drizzle-orm/vercel-postgres-js";
import { sql } from "@vercel/postgres";
import * as schema from "./schema";

export const db = drizzle<sql.Sql, typeof schema>(sql, {schema});
