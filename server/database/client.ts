import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schemas from "./schemas/schemas";

const sqlite = new Database("./server/database/sqlite.db");
export const db = drizzle(sqlite, { schemas });
