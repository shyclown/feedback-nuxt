import * as schemas from "../database/schemas/schemas";
import { db } from "~~/server/database/client";

export { sql, eq, and, or } from "drizzle-orm";

export const tables = schemas;

export function useDrizzle() {
  return db;
}
