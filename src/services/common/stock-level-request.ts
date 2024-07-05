// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const stockLevelRequest = z.object({
  sku: z.string().optional(),
  locale: z.string().optional(),
  quantity: z.number().optional(),
  externalId: z.string().optional(),
});

/**
 *
 * @typedef  {StockLevelRequest} stockLevelRequest
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 */
export type StockLevelRequest = z.infer<typeof stockLevelRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const stockLevelRequestResponse = z
  .object({
    sku: z.string().optional(),
    locale: z.string().optional(),
    quantity: z.number().optional(),
    externalId: z.string().optional(),
  })
  .transform((data) => ({
    sku: data['sku'],
    locale: data['locale'],
    quantity: data['quantity'],
    externalId: data['externalId'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const stockLevelRequestRequest = z
  .object({
    sku: z.string().nullish(),
    locale: z.string().nullish(),
    quantity: z.number().nullish(),
    externalId: z.string().nullish(),
  })
  .transform((data) => ({
    sku: data['sku'],
    locale: data['locale'],
    quantity: data['quantity'],
    externalId: data['externalId'],
  }));