import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const interactionSchemaResponseSelf: any = z.lazy(() => {
  return z.object({
    href: z.string().optional(),
    created: z.string().optional(),
  });
});

/**
 *
 * @typedef  {InteractionSchemaResponseSelf} interactionSchemaResponseSelf
 * @property {string}
 * @property {string}
 */
export type InteractionSchemaResponseSelf = z.infer<typeof interactionSchemaResponseSelf>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionSchemaResponseSelfResponse: any = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
      created: z.string().optional(),
    })
    .transform((data) => ({
      href: data['href'],
      created: data['created'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionSchemaResponseSelfRequest: any = z.lazy(() => {
  return z.object({ href: z.string().nullish(), created: z.string().nullish() }).transform((data) => ({
    href: data['href'],
    created: data['created'],
  }));
});