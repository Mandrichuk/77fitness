import { z } from "zod";

const categorySchema = z.object({
  id: z.optional(z.number()),
  sku: z.string().min(1),
  name: z.string().min(1),
  bgText: z.object({
    en: z.string().min(1),
    ru: z.string().min(1),
    sk: z.string().min(1),
  }),
  title: z.object({
    en: z.string().min(1),
    ru: z.string().min(1),
    sk: z.string().min(1),
  }),
  recomended: z.boolean(),
  toDisplay: z.boolean(),
});

export default categorySchema;
