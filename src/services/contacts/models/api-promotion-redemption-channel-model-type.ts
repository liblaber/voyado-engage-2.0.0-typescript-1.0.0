import { z } from 'zod';

export const apiPromotionRedemptionChannelModelType = z.enum(['POS', 'ECOM', 'OTHER']);

export type ApiPromotionRedemptionChannelModelType = z.infer<typeof apiPromotionRedemptionChannelModelType>;
