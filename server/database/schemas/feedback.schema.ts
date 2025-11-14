import {
  createInsertSchema,
  createSelectSchema,
  createUpdateSchema,
} from "drizzle-zod";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";

export const feedbacks = sqliteTable("feedbacks", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  text: text("text").notNull(),
  sentiment: text("sentiment").notNull(),
  shared: integer("shared", { mode: "boolean" }).notNull(),
  contact: integer("contact", { mode: "boolean" }).notNull(),
  createdAt: integer("created_at", { mode: "timestamp" }).notNull(),
});

export const feedbacksInsertSchema = createInsertSchema(feedbacks).omit({
  id: true,
  createdAt: true,
});
export const feedbacksUpdateSchema = createUpdateSchema(feedbacks);
