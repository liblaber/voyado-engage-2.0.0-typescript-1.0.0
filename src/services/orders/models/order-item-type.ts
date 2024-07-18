import { z } from 'zod';

export const orderItemType = z.enum(['PURCHASE', 'RETURN']);

export type OrderItemType = z.infer<typeof orderItemType>;
