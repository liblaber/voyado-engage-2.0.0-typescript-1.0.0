import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const receiptExtraDataItem: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ReceiptExtraDataItem} receiptExtraDataItem
 * @property {string}
 * @property {string}
 */
export type ReceiptExtraDataItem = z.infer<typeof receiptExtraDataItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptExtraDataItemResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      value: data['value'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptExtraDataItemRequest: any = z.lazy(() => {
  return z.object({ name: z.string().nullish(), value: z.string().nullish() }).transform((data) => ({
    name: data['name'],
    value: data['value'],
  }));
});