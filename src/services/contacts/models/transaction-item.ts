// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const transactionItem: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    transactionNumber: z.string().optional(),
    createdDate: z.string().optional(),
    storeName: z.string().optional(),
    numberOfItems: z.number().optional(),
    netPriceSum: z.number().optional(),
    localNetPriceSum: z.number().optional(),
    localCurrency: z.string().optional(),
    groupCurrency: z.string().optional(),
    storeType: z.string().optional(),
    lineItems: z.array(z.any()).optional(),
    externalId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {TransactionItem} transactionItem
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any[]}
 * @property {string}
 */
export type TransactionItem = z.infer<typeof transactionItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const transactionItemResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      transactionNumber: z.string().optional(),
      createdDate: z.string().optional(),
      storeName: z.string().optional(),
      numberOfItems: z.number().optional(),
      netPriceSum: z.number().optional(),
      localNetPriceSum: z.number().optional(),
      localCurrency: z.string().optional(),
      groupCurrency: z.string().optional(),
      storeType: z.string().optional(),
      lineItems: z.array(z.any()).optional(),
      externalId: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      transactionNumber: data['transactionNumber'],
      createdDate: data['createdDate'],
      storeName: data['storeName'],
      numberOfItems: data['numberOfItems'],
      netPriceSum: data['netPriceSum'],
      localNetPriceSum: data['localNetPriceSum'],
      localCurrency: data['localCurrency'],
      groupCurrency: data['groupCurrency'],
      storeType: data['storeType'],
      lineItems: data['lineItems'],
      externalId: data['externalId'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const transactionItemRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      transactionNumber: z.string().nullish(),
      createdDate: z.string().nullish(),
      storeName: z.string().nullish(),
      numberOfItems: z.number().nullish(),
      netPriceSum: z.number().nullish(),
      localNetPriceSum: z.number().nullish(),
      localCurrency: z.string().nullish(),
      groupCurrency: z.string().nullish(),
      storeType: z.string().nullish(),
      lineItems: z.array(z.any()).nullish(),
      externalId: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      transactionNumber: data['transactionNumber'],
      createdDate: data['createdDate'],
      storeName: data['storeName'],
      numberOfItems: data['numberOfItems'],
      netPriceSum: data['netPriceSum'],
      localNetPriceSum: data['localNetPriceSum'],
      localCurrency: data['localCurrency'],
      groupCurrency: data['groupCurrency'],
      storeType: data['storeType'],
      lineItems: data['lineItems'],
      externalId: data['externalId'],
    }));
});
