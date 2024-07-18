import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const subscriptionRequest: any = z.lazy(() => {
  return z.object({
    contactId: z.string().optional(),
    sku: z.string().optional(),
    locale: z.string().optional(),
    externalId: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SubscriptionRequest} subscriptionRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type SubscriptionRequest = z.infer<typeof subscriptionRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const subscriptionRequestResponse: any = z.lazy(() => {
  return z
    .object({
      contactId: z.string().optional(),
      sku: z.string().optional(),
      locale: z.string().optional(),
      externalId: z.string().optional(),
    })
    .transform((data) => ({
      contactId: data['contactId'],
      sku: data['sku'],
      locale: data['locale'],
      externalId: data['externalId'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const subscriptionRequestRequest: any = z.lazy(() => {
  return z
    .object({
      contactId: z.string().nullish(),
      sku: z.string().nullish(),
      locale: z.string().nullish(),
      externalId: z.string().nullish(),
    })
    .transform((data) => ({
      contactId: data['contactId'],
      sku: data['sku'],
      locale: data['locale'],
      externalId: data['externalId'],
    }));
});
