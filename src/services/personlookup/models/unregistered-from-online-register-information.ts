import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const unregisteredFromOnlineRegisterInformation: any = z.lazy(() => {
  return z.object({
    reason: z.string().optional(),
    date: z.string().optional(),
    newSocialSecurityNumber: z.string().optional(),
  });
});

/**
 *
 * @typedef  {UnregisteredFromOnlineRegisterInformation} unregisteredFromOnlineRegisterInformation
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type UnregisteredFromOnlineRegisterInformation = z.infer<typeof unregisteredFromOnlineRegisterInformation>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const unregisteredFromOnlineRegisterInformationResponse: any = z.lazy(() => {
  return z
    .object({
      reason: z.string().optional(),
      date: z.string().optional(),
      newSocialSecurityNumber: z.string().optional(),
    })
    .transform((data) => ({
      reason: data['reason'],
      date: data['date'],
      newSocialSecurityNumber: data['newSocialSecurityNumber'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const unregisteredFromOnlineRegisterInformationRequest: any = z.lazy(() => {
  return z
    .object({ reason: z.string().nullish(), date: z.string().nullish(), newSocialSecurityNumber: z.string().nullish() })
    .transform((data) => ({
      reason: data['reason'],
      date: data['date'],
      newSocialSecurityNumber: data['newSocialSecurityNumber'],
    }));
});