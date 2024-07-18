import { z } from 'zod';
import { apiMessage, apiMessageRequest, apiMessageResponse } from './api-message';

/**
 * The shape of the model inside the application code - what the users use
 */
export const listResultOfApiMessage: any = z.lazy(() => {
  return z.object({
    count: z.number().optional(),
    items: z.array(apiMessage).optional(),
  });
});

/**
 *
 * @typedef  {ListResultOfApiMessage} listResultOfApiMessage
 * @property {number}
 * @property {ApiMessage[]}
 */
export type ListResultOfApiMessage = z.infer<typeof listResultOfApiMessage>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const listResultOfApiMessageResponse: any = z.lazy(() => {
  return z
    .object({
      count: z.number().optional(),
      items: z.array(apiMessageResponse).optional(),
    })
    .transform((data) => ({
      count: data['count'],
      items: data['items'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const listResultOfApiMessageRequest: any = z.lazy(() => {
  return z.object({ count: z.number().nullish(), items: z.array(apiMessageRequest).nullish() }).transform((data) => ({
    count: data['count'],
    items: data['items'],
  }));
});