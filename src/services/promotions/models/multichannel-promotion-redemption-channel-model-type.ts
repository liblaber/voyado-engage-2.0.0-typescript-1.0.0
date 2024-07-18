import { z } from 'zod';

export const multichannelPromotionRedemptionChannelModelType = z.enum(['POS', 'ECOM', 'OTHER']);

export type MultichannelPromotionRedemptionChannelModelType = z.infer<
  typeof multichannelPromotionRedemptionChannelModelType
>;
