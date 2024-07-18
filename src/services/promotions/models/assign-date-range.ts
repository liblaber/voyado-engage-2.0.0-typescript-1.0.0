import { z } from 'zod';
import { unit } from './unit';

/**
 * The shape of the model inside the application code - what the users use
 */
export const assignDateRange: any = z.lazy(() => {
  return z.object({
    unit: unit,
    amount: z.number().gte(1).lte(2147483647),
  });
});

/**
 * The validity time of the promotion set when assignment occured
 * @typedef  {AssignDateRange} assignDateRange - The validity time of the promotion set when assignment occured - The validity time of the promotion set when assignment occured
 * @property {Unit}
 * @property {number}
 */
export type AssignDateRange = z.infer<typeof assignDateRange>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const assignDateRangeResponse: any = z.lazy(() => {
  return z
    .object({
      unit: unit,
      amount: z.number().gte(1).lte(2147483647),
    })
    .transform((data) => ({
      unit: data['unit'],
      amount: data['amount'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const assignDateRangeRequest: any = z.lazy(() => {
  return z.object({ unit: unit.nullish(), amount: z.number().nullish() }).transform((data) => ({
    unit: data['unit'],
    amount: data['amount'],
  }));
});