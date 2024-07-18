import { z } from 'zod';
import { allBonusCheckModel, allBonusCheckModelRequest, allBonusCheckModelResponse } from './all-bonus-check-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfAllBonusCheckModel: any = z.lazy(() => {
  return z.object({
    items: z.array(allBonusCheckModel).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfAllBonusCheckModel} pagedResultOfAllBonusCheckModel
 * @property {AllBonusCheckModel[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfAllBonusCheckModel = z.infer<typeof pagedResultOfAllBonusCheckModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfAllBonusCheckModelResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(allBonusCheckModelResponse).optional(),
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
export const pagedResultOfAllBonusCheckModelRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(allBonusCheckModelRequest).nullish(),
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
