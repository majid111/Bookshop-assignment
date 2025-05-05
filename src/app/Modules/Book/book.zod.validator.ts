import { z } from 'zod';

export const BookValidationSchema = z.object({
  id: z.number().int().nonnegative(),
  title: z.string().trim().min(3),
  author: z.string().trim().min(3),
  price: z.number().nonnegative(),
  category: z.enum([
    'Fiction',
    'Science',
    'SelfDevelopment',
    'Poetry',
    'Religious',
  ]),
  description: z.string().trim().min(10),
  quantity: z.number().int().nonnegative(),
  image: z.string().trim().url().optional(),
  inStock: z.boolean(),
});

// User.parse({ username: 'Ludwig' });

// // extract the inferred type
// type User = z.infer<typeof User>;
// // { username: string }
