import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "sqlite",
  schema: "./server/database/schemas/schemas.ts",
  out: "./server/database/migrations",
  dbCredentials: {
    url: "./server/database/sqlite.db",
  },
});
