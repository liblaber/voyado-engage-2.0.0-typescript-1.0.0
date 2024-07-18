import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const orderPaymentMethod: any = z.lazy(() => {
  return z.object({
    type: z.string(),
    description: z.string().optional(),
    value: z.number(),
    extraData: z.any().optional(),
  });
});

/**
 *
 * @typedef  {OrderPaymentMethod} orderPaymentMethod
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {any}
 */
export type OrderPaymentMethod = z.infer<typeof orderPaymentMethod>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const orderPaymentMethodResponse: any = z.lazy(() => {
  return z
    .object({
      type: z.string(),
      description: z.string().optional(),
      value: z.number(),
      extraData: z.any().optional(),
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
export const orderPaymentMethodRequest: any = z.lazy(() => {
  return z
    .object({
      type: z.string().nullish(),
      description: z.string().nullish(),
      value: z.number().nullish(),
      extraData: z.any().nullish(),
    })
    .transform((data) => ({
      type: data['type'],
      description: data['description'],
      value: data['value'],
      extraData: data['extraData'],
    }));
});
