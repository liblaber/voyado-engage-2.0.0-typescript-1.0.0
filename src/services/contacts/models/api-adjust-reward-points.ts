// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiAdjustRewardPoints = z.object({
  points: z.number(),
  description: z.string().optional(),
  type_: z.string().optional(),
});

/**
 *
 * @typedef  {ApiAdjustRewardPoints} apiAdjustRewardPoints
 * @property {number}
 * @property {string}
 * @property {string}
 */
export type ApiAdjustRewardPoints = z.infer<typeof apiAdjustRewardPoints>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiAdjustRewardPointsResponse = z
  .object({
    points: z.number(),
    description: z.string().optional(),
    type: z.string().optional(),
  })
  .transform((data) => ({
    points: data['points'],
    description: data['description'],
    type_: data['type'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiAdjustRewardPointsRequest = z
  .object({ points: z.number().nullish(), description: z.string().nullish(), type_: z.string().nullish() })
  .transform((data) => ({
    points: data['points'],
    description: data['description'],
    type: data['type_'],
  }));