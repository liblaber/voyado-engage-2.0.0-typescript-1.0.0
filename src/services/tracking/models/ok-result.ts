import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const okResult: any = z.lazy(() => {
  return z.object({
    request: z.any().optional(),
  });
});

/**
 *
 * @typedef  {OkResult} okResult
 * @property {any}
 */
export type OkResult = z.infer<typeof okResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const okResultResponse: any = z.lazy(() => {
  return z
    .object({
      request: z.any().optional(),
    })
    .transform((data) => ({
      request: data['request'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const okResultRequest: any = z.lazy(() => {
  return z.object({ request: z.any().nullish() }).transform((data) => ({
    request: data['request'],
  }));
});