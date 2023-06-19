import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  age: z.number().positive().int(),
  email: z.string().email(),
});
