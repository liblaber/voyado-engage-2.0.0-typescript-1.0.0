import { z } from 'zod';
import { iHypermediaLink, iHypermediaLinkRequest, iHypermediaLinkResponse } from '../../common/i-hypermedia-link';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pointAccountModel: any = z.lazy(() => {
  return z.object({
    balance: z.number().optional(),
    balanceExpires: z.string().optional(),
    contactId: z.string().optional(),
    definitionId: z.number().optional(),
    id: z.number().optional(),
    pendingPoints: z.number().optional(),
    links: z.array(iHypermediaLink).optional(),
  });
});

/**
 *
 * @typedef  {PointAccountModel} pointAccountModel
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {IHypermediaLink[]}
 */
export type PointAccountModel = z.infer<typeof pointAccountModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pointAccountModelResponse: any = z.lazy(() => {
  return z
    .object({
      balance: z.number().optional(),
      balanceExpires: z.string().optional(),
      contactId: z.string().optional(),
      definitionId: z.number().optional(),
      id: z.number().optional(),
      pendingPoints: z.number().optional(),
      links: z.array(iHypermediaLinkResponse).optional(),
    })
    .transform((data) => ({
      balance: data['balance'],
      balanceExpires: data['balanceExpires'],
      contactId: data['contactId'],
      definitionId: data['definitionId'],
      id: data['id'],
      pendingPoints: data['pendingPoints'],
      links: data['links'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pointAccountModelRequest: any = z.lazy(() => {
  return z
    .object({
      balance: z.number().nullish(),
      balanceExpires: z.string().nullish(),
      contactId: z.string().nullish(),
      definitionId: z.number().nullish(),
      id: z.number().nullish(),
      pendingPoints: z.number().nullish(),
      links: z.array(iHypermediaLinkRequest).nullish(),
    })
    .transform((data) => ({
      balance: data['balance'],
      balanceExpires: data['balanceExpires'],
      contactId: data['contactId'],
      definitionId: data['definitionId'],
      id: data['id'],
      pendingPoints: data['pendingPoints'],
      links: data['links'],
    }));
});