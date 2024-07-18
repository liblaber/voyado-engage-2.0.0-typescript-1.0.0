import { z } from 'zod';
import { receiptItemType } from './receipt-item-type';
import {
  receiptExtraDataItem,
  receiptExtraDataItemRequest,
  receiptExtraDataItemResponse,
} from './receipt-extra-data-item';
import { receiptItemDiscount, receiptItemDiscountRequest, receiptItemDiscountResponse } from './receipt-item-discount';

/**
 * The shape of the model inside the application code - what the users use
 */
export const receiptItem: any = z.lazy(() => {
  return z.object({
    type: receiptItemType,
    sku: z.string(),
    quantity: z.number(),
    packQuantity: z.number().optional(),
    grossPaidPrice: z.number(),
    taxAmount: z.number(),
    taxPercent: z.number(),
    extraData: z.array(receiptExtraDataItem).optional(),
    articleNumber: z.string(),
    articleName: z.string(),
    articleGroup: z.string().optional(),
    marginPercent: z.number().optional(),
    awardsBonus: z.boolean().optional(),
    discounts: z.array(receiptItemDiscount).optional(),
  });
});

/**
 *
 * @typedef  {ReceiptItem} receiptItem
 * @property {ReceiptItemType}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {ReceiptExtraDataItem[]}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {boolean}
 * @property {ReceiptItemDiscount[]}
 */
export type ReceiptItem = z.infer<typeof receiptItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptItemResponse: any = z.lazy(() => {
  return z
    .object({
      type: receiptItemType,
      sku: z.string(),
      quantity: z.number(),
      packQuantity: z.number().optional(),
      grossPaidPrice: z.number(),
      taxAmount: z.number(),
      taxPercent: z.number(),
      extraData: z.array(receiptExtraDataItemResponse).optional(),
      articleNumber: z.string(),
      articleName: z.string(),
      articleGroup: z.string().optional(),
      marginPercent: z.number().optional(),
      awardsBonus: z.boolean().optional(),
      discounts: z.array(receiptItemDiscountResponse).optional(),
    })
    .transform((data) => ({
      type: data['type'],
      sku: data['sku'],
      quantity: data['quantity'],
      packQuantity: data['packQuantity'],
      grossPaidPrice: data['grossPaidPrice'],
      taxAmount: data['taxAmount'],
      taxPercent: data['taxPercent'],
      extraData: data['extraData'],
      articleNumber: data['articleNumber'],
      articleName: data['articleName'],
      articleGroup: data['articleGroup'],
      marginPercent: data['marginPercent'],
      awardsBonus: data['awardsBonus'],
      discounts: data['discounts'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const receiptItemRequest: any = z.lazy(() => {
  return z
    .object({
      type: receiptItemType.nullish(),
      sku: z.string().nullish(),
      quantity: z.number().nullish(),
      packQuantity: z.number().nullish(),
      grossPaidPrice: z.number().nullish(),
      taxAmount: z.number().nullish(),
      taxPercent: z.number().nullish(),
      extraData: z.array(receiptExtraDataItemRequest).nullish(),
      articleNumber: z.string().nullish(),
      articleName: z.string().nullish(),
      articleGroup: z.string().nullish(),
      marginPercent: z.number().nullish(),
      awardsBonus: z.boolean().nullish(),
      discounts: z.array(receiptItemDiscountRequest).nullish(),
    })
    .transform((data) => ({
      type: data['type'],
      sku: data['sku'],
      quantity: data['quantity'],
      packQuantity: data['packQuantity'],
      grossPaidPrice: data['grossPaidPrice'],
      taxAmount: data['taxAmount'],
      taxPercent: data['taxPercent'],
      extraData: data['extraData'],
      articleNumber: data['articleNumber'],
      articleName: data['articleName'],
      articleGroup: data['articleGroup'],
      marginPercent: data['marginPercent'],
      awardsBonus: data['awardsBonus'],
      discounts: data['discounts'],
    }));
});
