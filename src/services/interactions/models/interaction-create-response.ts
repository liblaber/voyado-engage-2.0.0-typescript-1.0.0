import { z } from 'zod';
import {
  interactionCreateResponseSelf,
  interactionCreateResponseSelfRequest,
  interactionCreateResponseSelfResponse,
} from './interaction-create-response-self';

/**
 * The shape of the model inside the application code - what the users use
 */
export const interactionCreateResponse: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    self: interactionCreateResponseSelf.optional(),
  });
});

/**
 *
 * @typedef  {InteractionCreateResponse} interactionCreateResponse
 * @property {string}
 * @property {InteractionCreateResponseSelf}
 */
export type InteractionCreateResponse = z.infer<typeof interactionCreateResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionCreateResponseResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      self: interactionCreateResponseSelfResponse.optional(),
    })
    .transform((data) => ({
      id: data['id'],
      self: data['self'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionCreateResponseRequest: any = z.lazy(() => {
  return z
    .object({ id: z.string().nullish(), self: interactionCreateResponseSelfRequest.nullish() })
    .transform((data) => ({
      id: data['id'],
      self: data['self'],
    }));
});
