import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const availableBonusCheckModel: any = z.lazy(() => {
  return z.object({
    expiresOn: z.string().optional(),
    id: z.string().optional(),
    checkNumber: z.string().optional(),
    name: z.string().optional(),
    value: z.any().optional(),
    localValues: z.array(z.any()).optional(),
    bonusPoints: z.number().optional(),
  });
});

/**
 *
 * @typedef  {AvailableBonusCheckModel} availableBonusCheckModel
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any}
 * @property {any[]}
 * @property {number}
 */
export type AvailableBonusCheckModel = z.infer<typeof availableBonusCheckModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const availableBonusCheckModelResponse: any = z.lazy(() => {
  return z
    .object({
      expiresOn: z.string().optional(),
      id: z.string().optional(),
      checkNumber: z.string().optional(),
      name: z.string().optional(),
      value: z.any().optional(),
      localValues: z.array(z.any()).optional(),
      bonusPoints: z.number().optional(),
    })
    .transform((data) => ({
      expiresOn: data['expiresOn'],
      id: data['id'],
      checkNumber: data['checkNumber'],
      name: data['name'],
      value: data['value'],
      localValues: data['localValues'],
      bonusPoints: data['bonusPoints'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const availableBonusCheckModelRequest: any = z.lazy(() => {
  return z
    .object({
      expiresOn: z.string().nullish(),
      id: z.string().nullish(),
      checkNumber: z.string().nullish(),
      name: z.string().nullish(),
      value: z.any().nullish(),
      localValues: z.array(z.any()).nullish(),
      bonusPoints: z.number().nullish(),
    })
    .transform((data) => ({
      expiresOn: data['expiresOn'],
      id: data['id'],
      checkNumber: data['checkNumber'],
      name: data['name'],
      value: data['value'],
      localValues: data['localValues'],
      bonusPoints: data['bonusPoints'],
    }));
});
