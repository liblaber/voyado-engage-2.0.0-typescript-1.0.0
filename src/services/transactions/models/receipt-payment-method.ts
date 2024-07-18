import { z } from 'zod';
import {
  receiptExtraDataItem,
  receiptExtraDataItemRequest,
  receiptExtraDataItemResponse,
} from './receipt-extra-data-item';

/**
 * The shape of the model inside the application code - what the users use
 */
export const receiptPaymentMethod: any = z.lazy(() => {
  return z.object({
    type: z.string(),
    description: z.string().optional(),
    value: z.number(),
    extraData: z.array(receiptExtraDataItem).optional(),
  });
});

/**
 *
 * @typedef  {ReceiptPaymentMethod} receiptPaymentMethod
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {ReceiptExtraDataItem[]}
 */
export type ReceiptPaymentMethod = z.infer<typeof receiptPaymentMethod>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptPaymentMethodResponse: any = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      description: z.string().optional(),
      value: z.number(),
      extraData: z.array(receiptExtraDataItemResponse).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      description: data['description'],
      value: data['value'],
      extraData: data['extraData'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptPaymentMethodRequest: any = z.lazy(() => {
  return z
    .object({
      type: z.string().nullish(),
      description: z.string().nullish(),
      value: z.number().nullish(),
      extraData: z.array(receiptExtraDataItemRequest).nullish(),
    })
    .transform((data) => ({
      type: data['type'],
      description: data['description'],
      value: data['value'],
      extraData: data['extraData'],
    }));
});
