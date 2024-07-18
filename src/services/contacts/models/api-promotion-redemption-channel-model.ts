import { z } from 'zod';
import { apiPromotionRedemptionChannelModelType } from './api-promotion-redemption-channel-model-type';
import { apiPromotionRedemptionChannelModelValueType } from './api-promotion-redemption-channel-model-value-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiPromotionRedemptionChannelModel: any = z.lazy(() => {
  return z.object({
    type: apiPromotionRedemptionChannelModelType.optional(),
    valueType: apiPromotionRedemptionChannelModelValueType.optional(),
    value: z.any().optional(),
    localValues: z.array(z.any()).optional(),
    instruction: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {ApiPromotionRedemptionChannelModel} apiPromotionRedemptionChannelModel   
 * @property {ApiPromotionRedemptionChannelModelType} 
 * @property {ApiPromotionRedemptionChannelModelValueType} 
 * @property {any} - The type of "Value" depends on "ValueType". 
"MONEY" returns a Money object (Amount+Currency), "EXTERNALOFFER" and "MANUAL" returns a string ("Promotion"). "PERCENT" returns an integer.
 * @property {any[]} 
 * @property {string} 
 */
export type ApiPromotionRedemptionChannelModel = z.infer<typeof apiPromotionRedemptionChannelModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiPromotionRedemptionChannelModelResponse: any = z.lazy(() => {
  return z
    .object({
      type: apiPromotionRedemptionChannelModelType.optional(),
      valueType: apiPromotionRedemptionChannelModelValueType.optional(),
      value: z.any().optional(),
      localValues: z.array(z.any()).optional(),
      instruction: z.string().optional(),
    })
    .transform((data) => ({
      type: data['type'],
      valueType: data['valueType'],
      value: data['value'],
      localValues: data['localValues'],
      instruction: data['instruction'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiPromotionRedemptionChannelModelRequest: any = z.lazy(() => {
  return z
    .object({
      type: apiPromotionRedemptionChannelModelType.nullish(),
      valueType: apiPromotionRedemptionChannelModelValueType.nullish(),
      value: z.any().nullish(),
      localValues: z.array(z.any()).nullish(),
      instruction: z.string().nullish(),
    })
    .transform((data) => ({
      type: data['type'],
      valueType: data['valueType'],
      value: data['value'],
      localValues: data['localValues'],
      instruction: data['instruction'],
    }));
});
