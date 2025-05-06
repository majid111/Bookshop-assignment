import { z } from 'zod';

export const orderValidationSchema = z.object({
  email: z.string().trim().email(),
  quantity: z.number().int().min(1),
  totalPrice: z.number().min(0),
});
