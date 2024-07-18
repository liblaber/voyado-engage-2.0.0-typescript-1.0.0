import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const orderFee: any = z.lazy(() => {
  return z.object({
    value: z.number(),
    tax: z.number().optional(),
    taxPercent: z.number().optional(),
  });
});

/**
 *
 * @typedef  {OrderFee} orderFee
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type OrderFee = z.infer<typeof orderFee>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const orderFeeResponse: any = z.lazy(() => {
  return z
    .object({
      value: z.number(),
      tax: z.number().optional(),
      taxPercent: z.number().optional(),
    })
    .transform((data) => ({
      value: data['value'],
      tax: data['tax'],
      taxPercent: data['taxPercent'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const orderFeeRequest: any = z.lazy(() => {
  return z
    .object({ value: z.number().nullish(), tax: z.number().nullish(), taxPercent: z.number().nullish() })
    .transform((data) => ({
      value: data['value'],
      tax: data['tax'],
      taxPercent: data['taxPercent'],
    }));
});
