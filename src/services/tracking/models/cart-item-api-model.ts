import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const cartItemApiModel: any = z.lazy(() => {
  return z.object({
    sku: z.string().optional(),
    quantity: z.number().optional(),
  });
});

/**
 * Cart item model
 * @typedef  {CartItemApiModel} cartItemApiModel - Cart item model - Cart item model
 * @property {string} - Stock keeping unit (article number)
 * @property {number} - Quantity
 */
export type CartItemApiModel = z.infer<typeof cartItemApiModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const cartItemApiModelResponse: any = z.lazy(() => {
  return z
    .object({
      sku: z.string().optional(),
      quantity: z.number().optional(),
    })
    .transform((data) => ({
      sku: data['sku'],
      quantity: data['quantity'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const cartItemApiModelRequest: any = z.lazy(() => {
  return z.object({ sku: z.string().nullish(), quantity: z.number().nullish() }).transform((data) => ({
    sku: data['sku'],
    quantity: data['quantity'],
  }));
});
