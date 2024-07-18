import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const subscriptionResponse: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    contactId: z.string().optional(),
    sku: z.string().optional(),
    locale: z.string().optional(),
    externalId: z.string().optional(),
    createdOn: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SubscriptionResponse} subscriptionResponse
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type SubscriptionResponse = z.infer<typeof subscriptionResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const subscriptionResponseResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      contactId: z.string().optional(),
      sku: z.string().optional(),
      locale: z.string().optional(),
      externalId: z.string().optional(),
      createdOn: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      contactId: data['contactId'],
      sku: data['sku'],
      locale: data['locale'],
      externalId: data['externalId'],
      createdOn: data['createdOn'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const subscriptionResponseRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      contactId: z.string().nullish(),
      sku: z.string().nullish(),
      locale: z.string().nullish(),
      externalId: z.string().nullish(),
      createdOn: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      contactId: data['contactId'],
      sku: data['sku'],
      locale: data['locale'],
      externalId: data['externalId'],
      createdOn: data['createdOn'],
    }));
});
