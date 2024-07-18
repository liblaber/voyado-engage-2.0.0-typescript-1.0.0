import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const redeemBodyModel: any = z.lazy(() => {
  return z.object({
    redemptionChannel: z.string().optional(),
  });
});

/**
 *
 * @typedef  {RedeemBodyModel} redeemBodyModel
 * @property {string}
 */
export type RedeemBodyModel = z.infer<typeof redeemBodyModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const redeemBodyModelResponse: any = z.lazy(() => {
  return z
    .object({
      redemptionChannel: z.string().optional(),
    })
    .transform((data) => ({
      redemptionChannel: data['redemptionChannel'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const redeemBodyModelRequest: any = z.lazy(() => {
  return z.object({ redemptionChannel: z.string().nullish() }).transform((data) => ({
    redemptionChannel: data['redemptionChannel'],
  }));
});
