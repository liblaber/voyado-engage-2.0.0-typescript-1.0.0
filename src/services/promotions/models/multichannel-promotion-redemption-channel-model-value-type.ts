import { z } from 'zod';

export const multichannelPromotionRedemptionChannelModelValueType = z.enum([
  'PERCENT',
  'MONEY',
  'EXTERNALOFFER',
  'MANUAL',
  'SWIPE',
]);

export type MultichannelPromotionRedemptionChannelModelValueType = z.infer<
  typeof multichannelPromotionRedemptionChannelModelValueType
>;
