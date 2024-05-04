import { z } from "zod";

const orderProductSchema = z.object({
  id: z.number().optional(),
  orderId: z.number(),
  productId: z.number(),
});

const orderSchema = z.object({
  id: z.number().optional(),
  sku: z.string(),
  clientSku: z.string(),
  products: z.array(orderProductSchema).optional(),
  orderedDate: z.string().optional(),
  completedDate: z.string().optional(),
  isDone: z.boolean().optional(),
  clientId: z.number(),
});

const clientSchema = z.object({
  id: z.number().optional(),
  sku: z.string(),
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
  registrationDate: z.string().optional(),
  lastLoginDate: z.string().optional(),
  orders: z.array(orderSchema).optional(),
});

export { clientSchema, orderSchema, orderProductSchema };
