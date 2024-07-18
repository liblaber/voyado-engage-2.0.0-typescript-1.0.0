import { z } from 'zod';
import { multichannelPromotionRedemptionChannelModelType } from './multichannel-promotion-redemption-channel-model-type';
import { multichannelPromotionRedemptionChannelModelValueType } from './multichannel-promotion-redemption-channel-model-value-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const multichannelPromotionRedemptionChannelModel: any = z.lazy(() => {
  return z.object({
    type: multichannelPromotionRedemptionChannelModelType.optional(),
    valueType: multichannelPromotionRedemptionChannelModelValueType.optional(),
    value: z.string().optional(),
    localValues: z.array(z.any()).optional(),
    instruction: z.string().optional(),
  });
});

/**
 * 
 * @typedef  {MultichannelPromotionRedemptionChannelModel} multichannelPromotionRedemptionChannelModel   
 * @property {MultichannelPromotionRedemptionChannelModelType} 
 * @property {MultichannelPromotionRedemptionChannelModelValueType} 
 * @property {string} - The type of "Value" depends on "ValueType". 
"MONEY" expects a decimal as a string ("20.5"). "SWIPE", "EXTERNALOFFER" and "MANUAL" expects a string ("Promotion"). "PERCENT" expects an integer as a string ("20").
 * @property {any[]} 
 * @property {string} 
 */
export type MultichannelPromotionRedemptionChannelModel = z.infer<typeof multichannelPromotionRedemptionChannelModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const multichannelPromotionRedemptionChannelModelResponse: any = z.lazy(() => {
  return z
    .object({
      type: multichannelPromotionRedemptionChannelModelType.optional(),
      valueType: multichannelPromotionRedemptionChannelModelValueType.optional(),
      value: z.string().optional(),
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
export const multichannelPromotionRedemptionChannelModelRequest: any = z.lazy(() => {
  return z
    .object({
      type: multichannelPromotionRedemptionChannelModelType.nullish(),
      valueType: multichannelPromotionRedemptionChannelModelValueType.nullish(),
      value: z.string().nullish(),
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
