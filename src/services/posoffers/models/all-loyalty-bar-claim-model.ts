import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const allLoyaltyBarClaimModel: any = z.lazy(() => {
  return z.object({
    redeemedOn: z.string().optional(),
    redeemed: z.boolean().optional(),
    expiresOn: z.string().optional(),
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
 * @typedef  {AllLoyaltyBarClaimModel} allLoyaltyBarClaimModel
 * @property {string}
 * @property {boolean}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any}
 * @property {string}
 */
export type AllLoyaltyBarClaimModel = z.infer<typeof allLoyaltyBarClaimModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const allLoyaltyBarClaimModelResponse: any = z.lazy(() => {
  return z
    .object({
      redeemedOn: z.string().optional(),
      redeemed: z.boolean().optional(),
      expiresOn: z.string().optional(),
      id: z.string().optional(),
      description: z.string().optional(),
      expireDateTime: z.string().optional(),
      type: z.string().optional(),
      value: z.any().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      redeemedOn: data['redeemedOn'],
      redeemed: data['redeemed'],
      expiresOn: data['expiresOn'],
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
export const allLoyaltyBarClaimModelRequest: any = z.lazy(() => {
  return z
    .object({
      redeemedOn: z.string().nullish(),
      redeemed: z.boolean().nullish(),
      expiresOn: z.string().nullish(),
      id: z.string().nullish(),
      description: z.string().nullish(),
      expireDateTime: z.string().nullish(),
      type: z.string().nullish(),
      value: z.any().nullish(),
      name: z.string().nullish(),
    })
    .transform((data) => ({
      redeemedOn: data['redeemedOn'],
      redeemed: data['redeemed'],
      expiresOn: data['expiresOn'],
      id: data['id'],
      description: data['description'],
      expireDateTime: data['expireDateTime'],
      type: data['type'],
      value: data['value'],
      name: data['name'],
    }));
});
