import { z } from 'zod';
import {
  apiAchievementDefinition,
  apiAchievementDefinitionRequest,
  apiAchievementDefinitionResponse,
} from './api-achievement-definition';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfApiAchievementDefinition: any = z.lazy(() => {
  return z.object({
    items: z.array(apiAchievementDefinition).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfApiAchievementDefinition} pagedResultOfApiAchievementDefinition
 * @property {ApiAchievementDefinition[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfApiAchievementDefinition = z.infer<typeof pagedResultOfApiAchievementDefinition>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfApiAchievementDefinitionResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(apiAchievementDefinitionResponse).optional(),
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
export const pagedResultOfApiAchievementDefinitionRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(apiAchievementDefinitionRequest).nullish(),
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
