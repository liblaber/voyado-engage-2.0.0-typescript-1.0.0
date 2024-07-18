import { z } from 'zod';

export const unit = z.enum(['Months', 'Days']);

export type Unit = z.infer<typeof unit>;
