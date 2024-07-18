import { z } from 'zod';

export const multichannelPromotionModelStatus = z.enum(['Ended', 'Active', 'Temporary', 'Draft', 'Scheduled']);

export type MultichannelPromotionModelStatus = z.infer<typeof multichannelPromotionModelStatus>;
