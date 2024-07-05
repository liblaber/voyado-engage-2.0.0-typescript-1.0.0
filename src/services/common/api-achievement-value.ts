// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiAchievementValue = z.object({
  name: z.string().optional(),
  id: z.string().optional(),
  date: z.string().optional(),
});

/**
 *
 * @typedef  {ApiAchievementValue} apiAchievementValue
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type ApiAchievementValue = z.infer<typeof apiAchievementValue>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiAchievementValueResponse = z
  .object({
    name: z.string().optional(),
    id: z.string().optional(),
    date: z.string().optional(),
  })
  .transform((data) => ({
    name: data['name'],
    id: data['id'],
    date: data['date'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiAchievementValueRequest = z
  .object({ name: z.string().nullish(), id: z.string().nullish(), date: z.string().nullish() })
  .transform((data) => ({
    name: data['name'],
    id: data['id'],
    date: data['date'],
  }));
