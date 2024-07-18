import { z } from 'zod';
import { cartItemApiModel, cartItemApiModelRequest, cartItemApiModelResponse } from './cart-item-api-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const cartApiModel: any = z.lazy(() => {
  return z.object({
    cartReference: z.string().optional(),
    time: z.string().optional(),
    contactId: z.string().optional(),
    language: z.string().optional(),
    url: z.string().optional(),
    items: z.array(cartItemApiModel).optional(),
  });
});

/**
 * Cart model
 * @typedef  {CartApiModel} cartApiModel - Cart model - Cart model
 * @property {string} - Unique cart reference
 * @property {string} - Last change date
 * @property {string} - Contact identifier
 * @property {string} - Language
 * @property {string} - Url to cart
 * @property {CartItemApiModel[]} - Cart items
 */
export type CartApiModel = z.infer<typeof cartApiModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const cartApiModelResponse: any = z.lazy(() => {
  return z
    .object({
      cartReference: z.string().optional(),
      time: z.string().optional(),
      contactId: z.string().optional(),
      language: z.string().optional(),
      url: z.string().optional(),
      items: z.array(cartItemApiModelResponse).optional(),
    })
    .transform((data) => ({
      cartReference: data['cartReference'],
      time: data['time'],
      contactId: data['contactId'],
      language: data['language'],
      url: data['url'],
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const cartApiModelRequest: any = z.lazy(() => {
  return z
    .object({
      cartReference: z.string().nullish(),
      time: z.string().nullish(),
      contactId: z.string().nullish(),
      language: z.string().nullish(),
      url: z.string().nullish(),
      items: z.array(cartItemApiModelRequest).nullish(),
    })
    .transform((data) => ({
      cartReference: data['cartReference'],
      time: data['time'],
      contactId: data['contactId'],
      language: data['language'],
      url: data['url'],
      items: data['items'],
    }));
});
