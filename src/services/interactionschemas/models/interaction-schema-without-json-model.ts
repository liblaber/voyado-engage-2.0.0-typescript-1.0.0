import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const interactionSchemaWithoutJsonModel: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    displayName: z.string().optional(),
  });
});

/**
 *
 * @typedef  {InteractionSchemaWithoutJsonModel} interactionSchemaWithoutJsonModel
 * @property {string}
 * @property {string}
 */
export type InteractionSchemaWithoutJsonModel = z.infer<typeof interactionSchemaWithoutJsonModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionSchemaWithoutJsonModelResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      displayName: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      displayName: data['displayName'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionSchemaWithoutJsonModelRequest: any = z.lazy(() => {
  return z.object({ id: z.string().nullish(), displayName: z.string().nullish() }).transform((data) => ({
    id: data['id'],
    displayName: data['displayName'],
  }));
});
