import { z } from 'zod';
import { apiMessage, apiMessageRequest, apiMessageResponse } from './api-message';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pagedResultOfApiMessage: any = z.lazy(() => {
  return z.object({
    items: z.array(apiMessage).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PagedResultOfApiMessage} pagedResultOfApiMessage
 * @property {ApiMessage[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PagedResultOfApiMessage = z.infer<typeof pagedResultOfApiMessage>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pagedResultOfApiMessageResponse: any = z.lazy(() => {
  return z
    .object({
      items: z.array(apiMessageResponse).optional(),
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
export const pagedResultOfApiMessageRequest: any = z.lazy(() => {
  return z
    .object({
      items: z.array(apiMessageRequest).nullish(),
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
