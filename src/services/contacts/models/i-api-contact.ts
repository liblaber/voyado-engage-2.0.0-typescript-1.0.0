import { z } from 'zod';
import { iApiConsent, iApiConsentRequest, iApiConsentResponse } from './i-api-consent';

/**
 * The shape of the model inside the application code - what the users use
 */
export const iApiContact: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    attributes: z.any().optional(),
    meta: z.any().optional(),
    preferences: z.any().optional(),
    consents: z.array(iApiConsent).optional(),
  });
});

/**
 *
 * @typedef  {IApiContact} iApiContact
 * @property {string}
 * @property {any}
 * @property {any}
 * @property {any}
 * @property {IApiConsent[]}
 */
export type IApiContact = z.infer<typeof iApiContact>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const iApiContactResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      attributes: z.any().optional(),
      meta: z.any().optional(),
      preferences: z.any().optional(),
      consents: z.array(iApiConsentResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      attributes: data['attributes'],
      meta: data['meta'],
      preferences: data['preferences'],
      consents: data['consents'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const iApiContactRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      attributes: z.any().nullish(),
      meta: z.any().nullish(),
      preferences: z.any().nullish(),
      consents: z.array(iApiConsentRequest).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      attributes: data['attributes'],
      meta: data['meta'],
      preferences: data['preferences'],
      consents: data['consents'],
    }));
});
