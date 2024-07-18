import { z } from 'zod';
import { iHypermediaLink, iHypermediaLinkRequest, iHypermediaLinkResponse } from '../../common/i-hypermedia-link';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pointTransactionModel: any = z.lazy(() => {
  return z.object({
    accountId: z.number().optional(),
    amount: z.number().optional(),
    createdOn: z.string().optional(),
    description: z.string().optional(),
    id: z.number().optional(),
    modifiedOn: z.string().optional(),
    source: z.string().optional(),
    transactionDate: z.string().optional(),
    type: z.string().optional(),
    validFrom: z.string().optional(),
    validTo: z.string().optional(),
    retailTransactionLineItemId: z.string().optional(),
    links: z.array(iHypermediaLink).optional(),
  });
});

/**
 *
 * @typedef  {PointTransactionModel} pointTransactionModel
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {IHypermediaLink[]}
 */
export type PointTransactionModel = z.infer<typeof pointTransactionModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pointTransactionModelResponse: any = z.lazy(() => {
  return z
    .object({
      accountId: z.number().optional(),
      amount: z.number().optional(),
      createdOn: z.string().optional(),
      description: z.string().optional(),
      id: z.number().optional(),
      modifiedOn: z.string().optional(),
      source: z.string().optional(),
      transactionDate: z.string().optional(),
      type: z.string().optional(),
      validFrom: z.string().optional(),
      validTo: z.string().optional(),
      retailTransactionLineItemId: z.string().optional(),
      links: z.array(iHypermediaLinkResponse).optional(),
    })
    .transform((data) => ({
      accountId: data['accountId'],
      amount: data['amount'],
      createdOn: data['createdOn'],
      description: data['description'],
      id: data['id'],
      modifiedOn: data['modifiedOn'],
      source: data['source'],
      transactionDate: data['transactionDate'],
      type: data['type'],
      validFrom: data['validFrom'],
      validTo: data['validTo'],
      retailTransactionLineItemId: data['retailTransactionLineItemId'],
      links: data['links'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pointTransactionModelRequest: any = z.lazy(() => {
  return z
    .object({
      accountId: z.number().nullish(),
      amount: z.number().nullish(),
      createdOn: z.string().nullish(),
      description: z.string().nullish(),
      id: z.number().nullish(),
      modifiedOn: z.string().nullish(),
      source: z.string().nullish(),
      transactionDate: z.string().nullish(),
      type: z.string().nullish(),
      validFrom: z.string().nullish(),
      validTo: z.string().nullish(),
      retailTransactionLineItemId: z.string().nullish(),
      links: z.array(iHypermediaLinkRequest).nullish(),
    })
    .transform((data) => ({
      accountId: data['accountId'],
      amount: data['amount'],
      createdOn: data['createdOn'],
      description: data['description'],
      id: data['id'],
      modifiedOn: data['modifiedOn'],
      source: data['source'],
      transactionDate: data['transactionDate'],
      type: data['type'],
      validFrom: data['validFrom'],
      validTo: data['validTo'],
      retailTransactionLineItemId: data['retailTransactionLineItemId'],
      links: data['links'],
    }));
});
