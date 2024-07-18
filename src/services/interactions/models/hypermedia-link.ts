import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const hypermediaLink: any = z.lazy(() => {
  return z.object({
    href: z.string().optional(),
    method: z.string().optional(),
    rel: z.string().optional(),
  });
});

/**
 *
 * @typedef  {HypermediaLink} hypermediaLink
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type HypermediaLink = z.infer<typeof hypermediaLink>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const hypermediaLinkResponse: any = z.lazy(() => {
  return z
    .object({
      href: z.string().optional(),
      method: z.string().optional(),
      rel: z.string().optional(),
    })
    .transform((data) => ({
      href: data['href'],
      method: data['method'],
      rel: data['rel'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const hypermediaLinkRequest: any = z.lazy(() => {
  return z
    .object({ href: z.string().nullish(), method: z.string().nullish(), rel: z.string().nullish() })
    .transform((data) => ({
      href: data['href'],
      method: data['method'],
      rel: data['rel'],
    }));
});