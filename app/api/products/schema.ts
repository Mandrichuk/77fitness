import { z } from "zod";

const schema = z.object({
  id: z.optional(z.number()),
  sku: z.string().min(1),
  name: z.string().min(1),
  categoryId: z.number(),
  description: z.object({
    en: z.string().min(1),
    ru: z.string().min(1),
    sk: z.string().min(1),
  }),
  imageUrls: z.array(z.string()),
  newPrice: z.number().min(0.01).max(9999.99),
  oldPrice: z.number().min(0.01).max(9999.99).optional(),
  createdAt: z.optional(z.string()),
  toDisplay: z.boolean(),
  leftInStock: z.number(),
});

export default schema;
