import { z } from 'zod';
import {
  availableBonusCheckModel,
  availableBonusCheckModelRequest,
  availableBonusCheckModelResponse,
} from './available-bonus-check-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfAvailableBonusCheckModel: any = z.lazy(() => {
  return z.object({
    items: z.array(availableBonusCheckModel).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfAvailableBonusCheckModel} pagedResultOfAvailableBonusCheckModel
 * @property {AvailableBonusCheckModel[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfAvailableBonusCheckModel = z.infer<typeof pagedResultOfAvailableBonusCheckModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfAvailableBonusCheckModelResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(availableBonusCheckModelResponse).optional(),
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
export const pagedResultOfAvailableBonusCheckModelRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(availableBonusCheckModelRequest).nullish(),
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
