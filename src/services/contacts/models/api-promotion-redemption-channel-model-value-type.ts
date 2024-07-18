import { z } from 'zod';

export const apiPromotionRedemptionChannelModelValueType = z.enum([
  'PERCENT',
  'MONEY',
  'EXTERNALOFFER',
  'MANUAL',
  'SWIPE',
]);

export type ApiPromotionRedemptionChannelModelValueType = z.infer<typeof apiPromotionRedemptionChannelModelValueType>;
