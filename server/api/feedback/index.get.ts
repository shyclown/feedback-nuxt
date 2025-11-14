import { desc } from "drizzle-orm";
export default eventHandler(async () => {
  return useDrizzle()
    .select({
      id: tables.feedbacks.id,
      createdAt: tables.feedbacks.createdAt,
      name: tables.feedbacks.name,
      text: tables.feedbacks.text,
      sentiment: tables.feedbacks.sentiment,
    })
    .from(tables.feedbacks)
    .orderBy(desc(tables.feedbacks.id));
});
