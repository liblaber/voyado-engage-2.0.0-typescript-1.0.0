import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const redeemedLoyaltyBarClaimModel: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    description: z.string().optional(),
    expireDateTime: z.string().optional(),
    type: z.string().optional(),
    value: z.any().optional(),
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {RedeemedLoyaltyBarClaimModel} redeemedLoyaltyBarClaimModel
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any}
 * @property {string}
 */
export type RedeemedLoyaltyBarClaimModel = z.infer<typeof redeemedLoyaltyBarClaimModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const redeemedLoyaltyBarClaimModelResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      description: z.string().optional(),
      expireDateTime: z.string().optional(),
      type: z.string().optional(),
      value: z.any().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      description: data['description'],
      expireDateTime: data['expireDateTime'],
      type: data['type'],
      value: data['value'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const redeemedLoyaltyBarClaimModelRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      description: z.string().nullish(),
      expireDateTime: z.string().nullish(),
      type: z.string().nullish(),
      value: z.any().nullish(),
      name: z.string().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      description: data['description'],
      expireDateTime: data['expireDateTime'],
      type: data['type'],
      value: data['value'],
      name: data['name'],
    }));
});
