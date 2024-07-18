import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const boolRequest: any = z.lazy(() => {
  return z.object({
    value: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {BoolRequest} boolRequest
 * @property {boolean}
 */
export type BoolRequest = z.infer<typeof boolRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const boolRequestResponse: any = z.lazy(() => {
  return z
    .object({
      value: z.boolean().optional(),
    })
    .transform((data) => ({
      value: data['value'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const boolRequestRequest: any = z.lazy(() => {
  return z.object({ value: z.boolean().nullish() }).transform((data) => ({
    value: data['value'],
  }));
});