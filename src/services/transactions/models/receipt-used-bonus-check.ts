import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const receiptUsedBonusCheck: any = z.lazy(() => {
  return z.object({
    checkNumber: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ReceiptUsedBonusCheck} receiptUsedBonusCheck
 * @property {string}
 */
export type ReceiptUsedBonusCheck = z.infer<typeof receiptUsedBonusCheck>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptUsedBonusCheckResponse: any = z.lazy(() => {
  return z
    .object({
      checkNumber: z.string().optional(),
    })
    .transform((data) => ({
      checkNumber: data['checkNumber'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptUsedBonusCheckRequest: any = z.lazy(() => {
  return z.object({ checkNumber: z.string().nullish() }).transform((data) => ({
    checkNumber: data['checkNumber'],
  }));
});
