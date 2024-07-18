import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiConsentDefinition: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    id: z.string().optional(),
    metaData: z.any().optional(),
  });
});

/**
 *
 * @typedef  {ApiConsentDefinition} apiConsentDefinition
 * @property {string}
 * @property {string}
 * @property {any}
 */
export type ApiConsentDefinition = z.infer<typeof apiConsentDefinition>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiConsentDefinitionResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      id: z.string().optional(),
      metaData: z.any().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      id: data['id'],
      metaData: data['metaData'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiConsentDefinitionRequest: any = z.lazy(() => {
  return z
    .object({ name: z.string().nullish(), id: z.string().nullish(), metaData: z.any().nullish() })
    .transform((data) => ({
      name: data['name'],
      id: data['id'],
      metaData: data['metaData'],
    }));
});
