import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const iApiConsent: any = z.lazy(() => {
  return z.object({
    comment: z.string().optional(),
    date: z.string().optional(),
    id: z.string().optional(),
    source: z.string().optional(),
    value: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {IApiConsent} iApiConsent
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {boolean}
 */
export type IApiConsent = z.infer<typeof iApiConsent>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const iApiConsentResponse: any = z.lazy(() => {
  return z
    .object({
      comment: z.string().optional(),
      date: z.string().optional(),
      id: z.string().optional(),
      source: z.string().optional(),
      value: z.boolean().optional(),
    })
    .transform((data) => ({
      comment: data['comment'],
      date: data['date'],
      id: data['id'],
      source: data['source'],
      value: data['value'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const iApiConsentRequest: any = z.lazy(() => {
  return z
    .object({
      comment: z.string().nullish(),
      date: z.string().nullish(),
      id: z.string().nullish(),
      source: z.string().nullish(),
      value: z.boolean().nullish(),
    })
    .transform((data) => ({
      comment: data['comment'],
      date: data['date'],
      id: data['id'],
      source: data['source'],
      value: data['value'],
    }));
});
