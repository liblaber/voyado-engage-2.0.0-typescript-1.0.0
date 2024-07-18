import { z } from 'zod';
import {
  promotionValidityModel,
  promotionValidityModelRequest,
  promotionValidityModelResponse,
} from './promotion-validity-model';
import {
  promotionBasicPresentationModel,
  promotionBasicPresentationModelRequest,
  promotionBasicPresentationModelResponse,
} from './promotion-basic-presentation-model';
import {
  multichannelPromotionRedemptionChannelModel,
  multichannelPromotionRedemptionChannelModelRequest,
  multichannelPromotionRedemptionChannelModelResponse,
} from './multichannel-promotion-redemption-channel-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const multichannelBasePromotionModel: any = z.lazy(() => {
  return z.object({
    externalId: z.string().optional(),
    name: z.string(),
    validity: promotionValidityModel.optional(),
    presentation: promotionBasicPresentationModel.optional(),
    redemptionChannels: z.array(multichannelPromotionRedemptionChannelModel).optional(),
  });
});

/**
 * 
 * @typedef  {MultichannelBasePromotionModel} multichannelBasePromotionModel   
 * @property {string} - External id generated from system outside of Voyado
 * @property {string} - Name of promtion. 
Following field is required and don't allows to be left out or set to null or empty string
 * @property {PromotionValidityModel} - Following class holds the duration information for a promotion.
The this object uses to set and get the duration of a promotion.
 * @property {PromotionBasicPresentationModel} - Following object is for get/set the presentational side of the promotion. 
This data uses to displey in different kind of views, for an example in Email messages etc.

This fields populates the "Presentation" section in the admin UI.
 * @property {MultichannelPromotionRedemptionChannelModel[]} - Redemption channels
Valid channels: POS, ECOM and OTHER
 */
export type MultichannelBasePromotionModel = z.infer<typeof multichannelBasePromotionModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const multichannelBasePromotionModelResponse: any = z.lazy(() => {
  return z
    .object({
      externalId: z.string().optional(),
      name: z.string(),
      validity: promotionValidityModelResponse.optional(),
      presentation: promotionBasicPresentationModelResponse.optional(),
      redemptionChannels: z.array(multichannelPromotionRedemptionChannelModelResponse).optional(),
    })
    .transform((data) => ({
      externalId: data['externalId'],
      name: data['name'],
      validity: data['validity'],
      presentation: data['presentation'],
      redemptionChannels: data['redemptionChannels'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const multichannelBasePromotionModelRequest: any = z.lazy(() => {
  return z
    .object({
      externalId: z.string().nullish(),
      name: z.string().nullish(),
      validity: promotionValidityModelRequest.nullish(),
      presentation: promotionBasicPresentationModelRequest.nullish(),
      redemptionChannels: z.array(multichannelPromotionRedemptionChannelModelRequest).nullish(),
    })
    .transform((data) => ({
      externalId: data['externalId'],
      name: data['name'],
      validity: data['validity'],
      presentation: data['presentation'],
      redemptionChannels: data['redemptionChannels'],
    }));
});
