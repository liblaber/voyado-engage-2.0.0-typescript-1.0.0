import { z } from 'zod';
import {
  bonusPointTransactionModel,
  bonusPointTransactionModelRequest,
  bonusPointTransactionModelResponse,
} from './bonus-point-transaction-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfBonusPointTransactionModel: any = z.lazy(() => {
  return z.object({
    items: z.array(bonusPointTransactionModel).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfBonusPointTransactionModel} pagedResultOfBonusPointTransactionModel
 * @property {BonusPointTransactionModel[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfBonusPointTransactionModel = z.infer<typeof pagedResultOfBonusPointTransactionModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfBonusPointTransactionModelResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(bonusPointTransactionModelResponse).optional(),
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
export const pagedResultOfBonusPointTransactionModelRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(bonusPointTransactionModelRequest).nullish(),
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
