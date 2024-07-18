import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const interactionSchemaModel: any = z.lazy(() => {
  return z.object({
    jsonSchema: z.any().optional(),
    id: z.string().optional(),
    displayName: z.string().optional(),
  });
});

/**
 *
 * @typedef  {InteractionSchemaModel} interactionSchemaModel
 * @property {any}
 * @property {string}
 * @property {string}
 */
export type InteractionSchemaModel = z.infer<typeof interactionSchemaModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionSchemaModelResponse: any = z.lazy(() => {
  return z
    .object({
      jsonSchema: z.any().optional(),
      id: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      jsonSchema: data['jsonSchema'],
      id: data['id'],
      displayName: data['displayName'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionSchemaModelRequest: any = z.lazy(() => {
  return z
    .object({ jsonSchema: z.any().nullish(), id: z.string().nullish(), displayName: z.string().nullish() })
    .transform((data) => ({
      jsonSchema: data['jsonSchema'],
      id: data['id'],
      displayName: data['displayName'],
    }));
});
