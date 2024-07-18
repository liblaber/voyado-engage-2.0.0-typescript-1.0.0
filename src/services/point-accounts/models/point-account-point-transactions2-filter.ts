import { z } from 'zod';

export const pointAccountPointTransactions2Filter = z.enum(['All', 'Active', 'Pending']);

export type PointAccountPointTransactions2Filter = z.infer<typeof pointAccountPointTransactions2Filter>;
