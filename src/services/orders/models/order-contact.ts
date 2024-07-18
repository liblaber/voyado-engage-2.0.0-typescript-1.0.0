import { z } from 'zod';
import { orderContactMatchKeyType } from './order-contact-match-key-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const orderContact: any = z.lazy(() => {
  return z.object({
    matchKey: z.string(),
    matchKeyType: orderContactMatchKeyType,
  });
});

/**
 *
 * @typedef  {OrderContact} orderContact
 * @property {string}
 * @property {OrderContactMatchKeyType}
 */
export type OrderContact = z.infer<typeof orderContact>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const orderContactResponse: any = z.lazy(() => {
  return z
    .object({
      matchKey: z.string(),
      matchKeyType: orderContactMatchKeyType,
    })
    .transform((data) => ({
      matchKey: data['matchKey'],
      matchKeyType: data['matchKeyType'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const orderContactRequest: any = z.lazy(() => {
  return z
    .object({ matchKey: z.string().nullish(), matchKeyType: orderContactMatchKeyType.nullish() })
    .transform((data) => ({
      matchKey: data['matchKey'],
      matchKeyType: data['matchKeyType'],
    }));
});
