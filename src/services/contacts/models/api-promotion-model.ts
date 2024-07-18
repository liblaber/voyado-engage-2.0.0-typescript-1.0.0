import { z } from 'zod';
import {
  apiPromotionRedemptionChannelModel,
  apiPromotionRedemptionChannelModelRequest,
  apiPromotionRedemptionChannelModelResponse,
} from './api-promotion-redemption-channel-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiPromotionModel: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    promotionId: z.string().optional(),
    externalId: z.string().optional(),
    type: z.string().optional(),
    name: z.string().optional(),
    expiresOn: z.string().optional(),
    heading: z.string().optional(),
    description: z.string().optional(),
    redeemed: z.boolean().optional(),
    redeemedOn: z.string().optional(),
    imageUrl: z.string().optional(),
    link: z.string().optional(),
    redemptionChannels: z.array(apiPromotionRedemptionChannelModel).optional(),
  });
});

/**
 *
 * @typedef  {ApiPromotionModel} apiPromotionModel
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {ApiPromotionRedemptionChannelModel[]}
 */
export type ApiPromotionModel = z.infer<typeof apiPromotionModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiPromotionModelResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      promotionId: z.string().optional(),
      externalId: z.string().optional(),
      type: z.string().optional(),
      name: z.string().optional(),
      expiresOn: z.string().optional(),
      heading: z.string().optional(),
      description: z.string().optional(),
      redeemed: z.boolean().optional(),
      redeemedOn: z.string().optional(),
      imageUrl: z.string().optional(),
      link: z.string().optional(),
      redemptionChannels: z.array(apiPromotionRedemptionChannelModelResponse).optional(),
    })
    .transform((data) => ({
      id: data['id'],
      promotionId: data['promotionId'],
      externalId: data['externalId'],
      type: data['type'],
      name: data['name'],
      expiresOn: data['expiresOn'],
      heading: data['heading'],
      description: data['description'],
      redeemed: data['redeemed'],
      redeemedOn: data['redeemedOn'],
      imageUrl: data['imageUrl'],
      link: data['link'],
      redemptionChannels: data['redemptionChannels'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiPromotionModelRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      promotionId: z.string().nullish(),
      externalId: z.string().nullish(),
      type: z.string().nullish(),
      name: z.string().nullish(),
      expiresOn: z.string().nullish(),
      heading: z.string().nullish(),
      description: z.string().nullish(),
      redeemed: z.boolean().nullish(),
      redeemedOn: z.string().nullish(),
      imageUrl: z.string().nullish(),
      link: z.string().nullish(),
      redemptionChannels: z.array(apiPromotionRedemptionChannelModelRequest).nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      promotionId: data['promotionId'],
      externalId: data['externalId'],
      type: data['type'],
      name: data['name'],
      expiresOn: data['expiresOn'],
      heading: data['heading'],
      description: data['description'],
      redeemed: data['redeemed'],
      redeemedOn: data['redeemedOn'],
      imageUrl: data['imageUrl'],
      link: data['link'],
      redemptionChannels: data['redemptionChannels'],
    }));
});