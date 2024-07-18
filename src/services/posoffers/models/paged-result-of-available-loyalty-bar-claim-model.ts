import { z } from 'zod';
import {
  availableLoyaltyBarClaimModel,
  availableLoyaltyBarClaimModelRequest,
  availableLoyaltyBarClaimModelResponse,
} from './available-loyalty-bar-claim-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfAvailableLoyaltyBarClaimModel: any = z.lazy(() => {
  return z.object({
    items: z.array(availableLoyaltyBarClaimModel).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfAvailableLoyaltyBarClaimModel} pagedResultOfAvailableLoyaltyBarClaimModel
 * @property {AvailableLoyaltyBarClaimModel[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfAvailableLoyaltyBarClaimModel = z.infer<typeof pagedResultOfAvailableLoyaltyBarClaimModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfAvailableLoyaltyBarClaimModelResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(availableLoyaltyBarClaimModelResponse).optional(),
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
export const pagedResultOfAvailableLoyaltyBarClaimModelRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(availableLoyaltyBarClaimModelRequest).nullish(),
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
