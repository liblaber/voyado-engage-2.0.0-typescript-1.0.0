import { z } from 'zod';
import {
  allLoyaltyBarClaimModel,
  allLoyaltyBarClaimModelRequest,
  allLoyaltyBarClaimModelResponse,
} from './all-loyalty-bar-claim-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfAllLoyaltyBarClaimModel: any = z.lazy(() => {
  return z.object({
    items: z.array(allLoyaltyBarClaimModel).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfAllLoyaltyBarClaimModel} pagedResultOfAllLoyaltyBarClaimModel
 * @property {AllLoyaltyBarClaimModel[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfAllLoyaltyBarClaimModel = z.infer<typeof pagedResultOfAllLoyaltyBarClaimModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfAllLoyaltyBarClaimModelResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(allLoyaltyBarClaimModelResponse).optional(),
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
export const pagedResultOfAllLoyaltyBarClaimModelRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(allLoyaltyBarClaimModelRequest).nullish(),
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