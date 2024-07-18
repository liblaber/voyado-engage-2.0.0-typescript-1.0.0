import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const receiptUsedPromotion: any = z.lazy(() => {
  return z.object({
    promotionId: z.string().optional(),
    couponId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ReceiptUsedPromotion} receiptUsedPromotion
 * @property {string}
 * @property {string}
 */
export type ReceiptUsedPromotion = z.infer<typeof receiptUsedPromotion>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptUsedPromotionResponse: any = z.lazy(() => {
  return z
    .object({
      promotionId: z.string().optional(),
      couponId: z.string().optional(),
    })
    .transform((data) => ({
      promotionId: data['promotionId'],
      couponId: data['couponId'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptUsedPromotionRequest: any = z.lazy(() => {
  return z.object({ promotionId: z.string().nullish(), couponId: z.string().nullish() }).transform((data) => ({
    promotionId: data['promotionId'],
    couponId: data['couponId'],
  }));
});
