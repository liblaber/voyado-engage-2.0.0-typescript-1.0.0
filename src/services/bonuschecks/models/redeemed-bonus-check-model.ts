import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const redeemedBonusCheckModel: any = z.lazy(() => {
  return z.object({
    redeemedOn: z.string().optional(),
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
 * @typedef  {RedeemedBonusCheckModel} redeemedBonusCheckModel
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any}
 * @property {any[]}
 * @property {number}
 */
export type RedeemedBonusCheckModel = z.infer<typeof redeemedBonusCheckModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const redeemedBonusCheckModelResponse: any = z.lazy(() => {
  return z
    .object({
      redeemedOn: z.string().optional(),
      id: z.string().optional(),
      checkNumber: z.string().optional(),
      name: z.string().optional(),
      value: z.any().optional(),
      localValues: z.array(z.any()).optional(),
      bonusPoints: z.number().optional(),
    })
    .transform((data) => ({
      redeemedOn: data['redeemedOn'],
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
export const redeemedBonusCheckModelRequest: any = z.lazy(() => {
  return z
    .object({
      redeemedOn: z.string().nullish(),
      id: z.string().nullish(),
      checkNumber: z.string().nullish(),
      name: z.string().nullish(),
      value: z.any().nullish(),
      localValues: z.array(z.any()).nullish(),
      bonusPoints: z.number().nullish(),
    })
    .transform((data) => ({
      redeemedOn: data['redeemedOn'],
      id: data['id'],
      checkNumber: data['checkNumber'],
      name: data['name'],
      value: data['value'],
      localValues: data['localValues'],
      bonusPoints: data['bonusPoints'],
    }));
});
