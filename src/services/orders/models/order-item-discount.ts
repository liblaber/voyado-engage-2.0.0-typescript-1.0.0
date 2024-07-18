import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const orderItemDiscount: any = z.lazy(() => {
  return z.object({
    value: z.number().gte(-2147483648).lte(0),
    type: z.string().optional(),
    description: z.string().optional(),
    extraData: z.any().optional(),
  });
});

/**
 *
 * @typedef  {OrderItemDiscount} orderItemDiscount
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {any}
 */
export type OrderItemDiscount = z.infer<typeof orderItemDiscount>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const orderItemDiscountResponse: any = z.lazy(() => {
  return z
    .object({
      value: z.number().gte(-2147483648).lte(0),
      type: z.string().optional(),
      description: z.string().optional(),
      extraData: z.any().optional(),
    })
    .transform((data) => ({
      value: data['value'],
      type: data['type'],
      description: data['description'],
      extraData: data['extraData'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const orderItemDiscountRequest: any = z.lazy(() => {
  return z
    .object({
      value: z.number().nullish(),
      type: z.string().nullish(),
      description: z.string().nullish(),
      extraData: z.any().nullish(),
    })
    .transform((data) => ({
      value: data['value'],
      type: data['type'],
      description: data['description'],
      extraData: data['extraData'],
    }));
});
