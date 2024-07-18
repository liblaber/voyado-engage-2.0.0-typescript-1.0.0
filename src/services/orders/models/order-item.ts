import { z } from 'zod';
import { orderItemType } from './order-item-type';
import { orderItemDiscount, orderItemDiscountRequest, orderItemDiscountResponse } from './order-item-discount';

/**
 * The shape of the model inside the application code - what the users use
 */
export const orderItem: any = z.lazy(() => {
  return z.object({
    type: orderItemType,
    sku: z.string(),
    quantity: z.number(),
    grossPaidPrice: z.number(),
    grossPaidPricePerUnit: z.number().optional(),
    taxAmount: z.number().optional(),
    taxPercent: z.number().optional(),
    description: z.string(),
    imageUrl: z.string().optional(),
    targetUrl: z.string().optional(),
    extraData: z.any().optional(),
    totalDiscount: z.number().optional(),
    originalPrice: z.number().optional(),
    originalPricePerUnit: z.number().optional(),
    discounts: z.array(orderItemDiscount).optional(),
    discounted: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {OrderItem} orderItem
 * @property {OrderItemType}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {OrderItemDiscount[]}
 * @property {boolean}
 */
export type OrderItem = z.infer<typeof orderItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const orderItemResponse: any = z.lazy(() => {
  return z
    .object({
      type: orderItemType,
      sku: z.string(),
      quantity: z.number(),
      grossPaidPrice: z.number(),
      grossPaidPricePerUnit: z.number().optional(),
      taxAmount: z.number().optional(),
      taxPercent: z.number().optional(),
      description: z.string(),
      imageUrl: z.string().optional(),
      targetUrl: z.string().optional(),
      extraData: z.any().optional(),
      totalDiscount: z.number().optional(),
      originalPrice: z.number().optional(),
      originalPricePerUnit: z.number().optional(),
      discounts: z.array(orderItemDiscountResponse).optional(),
      discounted: z.boolean().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      sku: data['sku'],
      quantity: data['quantity'],
      grossPaidPrice: data['grossPaidPrice'],
      grossPaidPricePerUnit: data['grossPaidPricePerUnit'],
      taxAmount: data['taxAmount'],
      taxPercent: data['taxPercent'],
      description: data['description'],
      imageUrl: data['imageUrl'],
      targetUrl: data['targetUrl'],
      extraData: data['extraData'],
      totalDiscount: data['totalDiscount'],
      originalPrice: data['originalPrice'],
      originalPricePerUnit: data['originalPricePerUnit'],
      discounts: data['discounts'],
      discounted: data['discounted'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const orderItemRequest: any = z.lazy(() => {
  return z
    .object({
      type: orderItemType.nullish(),
      sku: z.string().nullish(),
      quantity: z.number().nullish(),
      grossPaidPrice: z.number().nullish(),
      grossPaidPricePerUnit: z.number().nullish(),
      taxAmount: z.number().nullish(),
      taxPercent: z.number().nullish(),
      description: z.string().nullish(),
      imageUrl: z.string().nullish(),
      targetUrl: z.string().nullish(),
      extraData: z.any().nullish(),
      totalDiscount: z.number().nullish(),
      originalPrice: z.number().nullish(),
      originalPricePerUnit: z.number().nullish(),
      discounts: z.array(orderItemDiscountRequest).nullish(),
      discounted: z.boolean().nullish(),
    })
    .transform((data) => ({
      type: data['type'],
      sku: data['sku'],
      quantity: data['quantity'],
      grossPaidPrice: data['grossPaidPrice'],
      grossPaidPricePerUnit: data['grossPaidPricePerUnit'],
      taxAmount: data['taxAmount'],
      taxPercent: data['taxPercent'],
      description: data['description'],
      imageUrl: data['imageUrl'],
      targetUrl: data['targetUrl'],
      extraData: data['extraData'],
      totalDiscount: data['totalDiscount'],
      originalPrice: data['originalPrice'],
      originalPricePerUnit: data['originalPricePerUnit'],
      discounts: data['discounts'],
      discounted: data['discounted'],
    }));
});
