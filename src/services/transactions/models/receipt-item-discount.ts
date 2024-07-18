import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const receiptItemDiscount: any = z.lazy(() => {
  return z.object({
    value: z.number(),
    type: z.string().optional(),
    description: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ReceiptItemDiscount} receiptItemDiscount
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type ReceiptItemDiscount = z.infer<typeof receiptItemDiscount>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptItemDiscountResponse: any = z.lazy(() => {
  return z
    .object({
      value: z.number(),
      type: z.string().optional(),
      description: z.string().optional(),
    })
    .transform((data) => ({
      value: data['value'],
      type: data['type'],
      description: data['description'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptItemDiscountRequest: any = z.lazy(() => {
  return z
    .object({ value: z.number().nullish(), type: z.string().nullish(), description: z.string().nullish() })
    .transform((data) => ({
      value: data['value'],
      type: data['type'],
      description: data['description'],
    }));
});
