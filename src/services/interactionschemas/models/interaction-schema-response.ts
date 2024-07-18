import { z } from 'zod';
import {
  interactionSchemaResponseSelf,
  interactionSchemaResponseSelfRequest,
  interactionSchemaResponseSelfResponse,
} from './interaction-schema-response-self';

/**
 * The shape of the model inside the application code - what the users use
 */
export const interactionSchemaResponse: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    self: interactionSchemaResponseSelf.optional(),
  });
});

/**
 *
 * @typedef  {InteractionSchemaResponse} interactionSchemaResponse
 * @property {string}
 * @property {InteractionSchemaResponseSelf}
 */
export type InteractionSchemaResponse = z.infer<typeof interactionSchemaResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionSchemaResponseResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      self: interactionSchemaResponseSelfResponse.optional(),
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
export const interactionSchemaResponseRequest: any = z.lazy(() => {
  return z
    .object({ id: z.string().nullish(), self: interactionSchemaResponseSelfRequest.nullish() })
    .transform((data) => ({
      id: data['id'],
      self: data['self'],
    }));
});