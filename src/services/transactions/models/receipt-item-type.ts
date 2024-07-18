import { z } from 'zod';

export const receiptItemType = z.enum(['PURCHASE', 'RETURN', 'ADJUSTMENT']);

export type ReceiptItemType = z.infer<typeof receiptItemType>;
