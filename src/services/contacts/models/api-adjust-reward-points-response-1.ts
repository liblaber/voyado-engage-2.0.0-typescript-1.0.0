import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiAdjustRewardPointsResponse1: any = z.lazy(() => {
  return z.object({
    contactId: z.string(),
    totalRewardPoints: z.number(),
  });
});

/**
 *
 * @typedef  {ApiAdjustRewardPointsResponse1} apiAdjustRewardPointsResponse1
 * @property {string}
 * @property {number}
 */
export type ApiAdjustRewardPointsResponse1 = z.infer<typeof apiAdjustRewardPointsResponse1>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiAdjustRewardPointsResponse1Response: any = z.lazy(() => {
  return z
    .object({
      contactId: z.string(),
      totalRewardPoints: z.number(),
    })
    .transform((data) => ({
      contactId: data['contactId'],
      totalRewardPoints: data['totalRewardPoints'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiAdjustRewardPointsResponse1Request: any = z.lazy(() => {
  return z.object({ contactId: z.string().nullish(), totalRewardPoints: z.number().nullish() }).transform((data) => ({
    contactId: data['contactId'],
    totalRewardPoints: data['totalRewardPoints'],
  }));
});
