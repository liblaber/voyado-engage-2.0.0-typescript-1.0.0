import { z } from 'zod';

export const changeType = z.enum(['Created', 'Updated', 'Deleted']);

export type ChangeType = z.infer<typeof changeType>;
