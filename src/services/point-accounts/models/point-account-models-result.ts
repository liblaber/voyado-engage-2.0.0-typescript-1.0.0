import { z } from 'zod';
import { iHypermediaLink, iHypermediaLinkRequest, iHypermediaLinkResponse } from '../../common/i-hypermedia-link';
import { pointAccountModel, pointAccountModelRequest, pointAccountModelResponse } from './point-account-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pointAccountModelsResult: any = z.lazy(() => {
  return z.object({
    links: z.array(iHypermediaLink).optional(),
    items: z.array(pointAccountModel).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PointAccountModelsResult} pointAccountModelsResult
 * @property {IHypermediaLink[]}
 * @property {PointAccountModel[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PointAccountModelsResult = z.infer<typeof pointAccountModelsResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pointAccountModelsResultResponse: any = z.lazy(() => {
  return z
    .object({
      links: z.array(iHypermediaLinkResponse).optional(),
      items: z.array(pointAccountModelResponse).optional(),
      totalCount: z.number().optional(),
      offset: z.number().optional(),
      count: z.number().optional(),
    })
    .transform((data) => ({
      links: data['links'],
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
export const pointAccountModelsResultRequest: any = z.lazy(() => {
  return z
    .object({
      links: z.array(iHypermediaLinkRequest).nullish(),
      items: z.array(pointAccountModelRequest).nullish(),
      totalCount: z.number().nullish(),
      offset: z.number().nullish(),
      count: z.number().nullish(),
    })
    .transform((data) => ({
      links: data['links'],
      items: data['items'],
      totalCount: data['totalCount'],
      offset: data['offset'],
      count: data['count'],
    }));
});
