import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const utm: any = z.lazy(() => {
  return z.object({
    key: z.string().optional(),
    value: z.string().optional(),
  });
});

/**
 *
 * @typedef  {Utm} utm
 * @property {string}
 * @property {string}
 */
export type Utm = z.infer<typeof utm>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const utmResponse: any = z.lazy(() => {
  return z
    .object({
      key: z.string().optional(),
      value: z.string().optional(),
    })
    .transform((data) => ({
      key: data['key'],
      value: data['value'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const utmRequest: any = z.lazy(() => {
  return z.object({ key: z.string().nullish(), value: z.string().nullish() }).transform((data) => ({
    key: data['key'],
    value: data['value'],
  }));
});
