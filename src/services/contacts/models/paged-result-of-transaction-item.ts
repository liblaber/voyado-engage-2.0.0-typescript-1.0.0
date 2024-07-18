import { z } from 'zod';
import { transactionItem, transactionItemRequest, transactionItemResponse } from './transaction-item';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfTransactionItem: any = z.lazy(() => {
  return z.object({
    items: z.array(transactionItem).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfTransactionItem} pagedResultOfTransactionItem
 * @property {TransactionItem[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfTransactionItem = z.infer<typeof pagedResultOfTransactionItem>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfTransactionItemResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(transactionItemResponse).optional(),
      totalCount: z.number().optional(),
      offset: z.number().optional(),
      count: z.number().optional(),
    })
    .transform((data) => ({
      items: data['items'],
      totalCount: data['totalCount'],
      offset: data['offset'],
      count: data['count'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfTransactionItemRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(transactionItemRequest).nullish(),
      totalCount: z.number().nullish(),
      offset: z.number().nullish(),
      count: z.number().nullish(),
    })
    .transform((data) => ({
      items: data['items'],
      totalCount: data['totalCount'],
      offset: data['offset'],
      count: data['count'],
    }));
});
