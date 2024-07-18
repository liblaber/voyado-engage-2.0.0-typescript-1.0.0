import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const sendSmsResponse: any = z.lazy(() => {
  return z.object({
    success: z.boolean().optional(),
  });
});

/**
 *
 * @typedef  {SendSmsResponse} sendSmsResponse
 * @property {boolean}
 */
export type SendSmsResponse = z.infer<typeof sendSmsResponse>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const sendSmsResponseResponse: any = z.lazy(() => {
  return z
    .object({
      success: z.boolean().optional(),
    })
    .transform((data) => ({
      success: data['success'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const sendSmsResponseRequest: any = z.lazy(() => {
  return z.object({ success: z.boolean().nullish() }).transform((data) => ({
    success: data['success'],
  }));
});