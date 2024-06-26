const { z } = require("zod");

const OrderProductSchema = z.object({
  id: z.number().int().optional(),
  orderId: z.number().int(),
  productSku: z.string().min(1),
  quantity: z.number().int(),
});

const OrderSchema = z.object({
  id: z.number().int().optional(),
  sku: z.string().min(1).optional(),
  clientSku: z.string().optional(),
  products: z.array(OrderProductSchema).optional(),
  orderedDate: z.string().optional(),
  completedDate: z.string().optional(),
  isDone: z.boolean().optional(),
});

export default OrderSchema;
