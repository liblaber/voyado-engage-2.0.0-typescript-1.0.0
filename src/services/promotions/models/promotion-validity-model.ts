import { z } from 'zod';
import { assignDateRange, assignDateRangeRequest, assignDateRangeResponse } from './assign-date-range';

/**
 * The shape of the model inside the application code - what the users use
 */
export const promotionValidityModel: any = z.lazy(() => {
  return z.object({
    startDate: z.string(),
    endDate: z.string().optional(),
    assignedValidity: assignDateRange.optional(),
  });
});

/**
 * Following class holds the duration information for a promotion.
The this object uses to set and get the duration of a promotion.
 * @typedef  {PromotionValidityModel} promotionValidityModel - Following class holds the duration information for a promotion.
The this object uses to set and get the duration of a promotion. - Following class holds the duration information for a promotion.
The this object uses to set and get the duration of a promotion.
 * @property {string} - Start date when the promotion going to be active
 * @property {string} - End date when the promotion not longer active
 * @property {AssignDateRange} - The validity time of the promotion set when assignment occured
 */
export type PromotionValidityModel = z.infer<typeof promotionValidityModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const promotionValidityModelResponse: any = z.lazy(() => {
  return z
    .object({
      startDate: z.string(),
      endDate: z.string().optional(),
      assignedValidity: assignDateRangeResponse.optional(),
    })
    .transform((data) => ({
      startDate: data['startDate'],
      endDate: data['endDate'],
      assignedValidity: data['assignedValidity'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const promotionValidityModelRequest: any = z.lazy(() => {
  return z
    .object({
      startDate: z.string().nullish(),
      endDate: z.string().nullish(),
      assignedValidity: assignDateRangeRequest.nullish(),
    })
    .transform((data) => ({
      startDate: data['startDate'],
      endDate: data['endDate'],
      assignedValidity: data['assignedValidity'],
    }));
});
