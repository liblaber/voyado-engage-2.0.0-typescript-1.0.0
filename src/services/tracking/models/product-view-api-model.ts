import { z } from 'zod';
import { utm, utmRequest, utmResponse } from './utm';

/**
 * The shape of the model inside the application code - what the users use
 */
export const productViewApiModel: any = z.lazy(() => {
  return z.object({
    itemId: z.string(),
    category: z.string().optional(),
    time: z.string().optional(),
    contactId: z.string(),
    sessionId: z.string().optional(),
    newSession: z.boolean().optional(),
    language: z.string().optional(),
    url: z.string().optional(),
    externalReferrer: z.string().optional(),
    utm: z.array(utm).optional(),
  });
});

/**
 *
 * @typedef  {ProductViewApiModel} productViewApiModel
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {Utm[]}
 */
export type ProductViewApiModel = z.infer<typeof productViewApiModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const productViewApiModelResponse: any = z.lazy(() => {
  return z
    .object({
      itemId: z.string(),
      category: z.string().optional(),
      time: z.string().optional(),
      contactId: z.string(),
      sessionId: z.string().optional(),
      newSession: z.boolean().optional(),
      language: z.string().optional(),
      url: z.string().optional(),
      externalReferrer: z.string().optional(),
      utm: z.array(utmResponse).optional(),
    })
    .transform((data) => ({
      itemId: data['itemId'],
      category: data['category'],
      time: data['time'],
      contactId: data['contactId'],
      sessionId: data['sessionId'],
      newSession: data['newSession'],
      language: data['language'],
      url: data['url'],
      externalReferrer: data['externalReferrer'],
      utm: data['utm'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const productViewApiModelRequest: any = z.lazy(() => {
  return z
    .object({
      itemId: z.string().nullish(),
      category: z.string().nullish(),
      time: z.string().nullish(),
      contactId: z.string().nullish(),
      sessionId: z.string().nullish(),
      newSession: z.boolean().nullish(),
      language: z.string().nullish(),
      url: z.string().nullish(),
      externalReferrer: z.string().nullish(),
      utm: z.array(utmRequest).nullish(),
    })
    .transform((data) => ({
      itemId: data['itemId'],
      category: data['category'],
      time: data['time'],
      contactId: data['contactId'],
      sessionId: data['sessionId'],
      newSession: data['newSession'],
      language: data['language'],
      url: data['url'],
      externalReferrer: data['externalReferrer'],
      utm: data['utm'],
    }));
});
