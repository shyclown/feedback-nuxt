import { z } from "zod";
import { feedbacksInsertSchema } from "~~/server/database/schemas/feedback.schema";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  const result = feedbacksInsertSchema.safeParse(body);

  if (!result.success) {
    throw createError({
      statusCode: 400,
      statusMessage: "Validation failed",
      data: z.treeifyError(result.error),
    });
  }

  return await useDrizzle()
    .insert(tables.feedbacks)
    .values({
      ...body,
      createdAt: new Date(),
    })
    .returning()
    .get();
});
