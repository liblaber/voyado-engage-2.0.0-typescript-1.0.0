import { z } from 'zod';
import {
  redeemedBonusCheckModel,
  redeemedBonusCheckModelRequest,
  redeemedBonusCheckModelResponse,
} from './redeemed-bonus-check-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfRedeemedBonusCheckModel: any = z.lazy(() => {
  return z.object({
    items: z.array(redeemedBonusCheckModel).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfRedeemedBonusCheckModel} pagedResultOfRedeemedBonusCheckModel
 * @property {RedeemedBonusCheckModel[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfRedeemedBonusCheckModel = z.infer<typeof pagedResultOfRedeemedBonusCheckModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfRedeemedBonusCheckModelResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(redeemedBonusCheckModelResponse).optional(),
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
export const pagedResultOfRedeemedBonusCheckModelRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(redeemedBonusCheckModelRequest).nullish(),
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
