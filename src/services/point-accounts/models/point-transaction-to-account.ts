import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pointTransactionToAccount: any = z.lazy(() => {
  return z.object({
    contactId: z.string().optional(),
    amount: z.number().optional(),
    definitionId: z.number().optional(),
    timeStamp: z.string().optional(),
    source: z.string().optional(),
    description: z.string().optional(),
    validFrom: z.string().optional(),
    validTo: z.string().optional(),
  });
});

/**
 *
 * @typedef  {PointTransactionToAccount} pointTransactionToAccount
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type PointTransactionToAccount = z.infer<typeof pointTransactionToAccount>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pointTransactionToAccountResponse: any = z.lazy(() => {
  return z
    .object({
      contactId: z.string().optional(),
      amount: z.number().optional(),
      definitionId: z.number().optional(),
      timeStamp: z.string().optional(),
      source: z.string().optional(),
      description: z.string().optional(),
      validFrom: z.string().optional(),
      validTo: z.string().optional(),
    })
    .transform((data) => ({
      contactId: data['contactId'],
      amount: data['amount'],
      definitionId: data['definitionId'],
      timeStamp: data['timeStamp'],
      source: data['source'],
      description: data['description'],
      validFrom: data['validFrom'],
      validTo: data['validTo'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pointTransactionToAccountRequest: any = z.lazy(() => {
  return z
    .object({
      contactId: z.string().nullish(),
      amount: z.number().nullish(),
      definitionId: z.number().nullish(),
      timeStamp: z.string().nullish(),
      source: z.string().nullish(),
      description: z.string().nullish(),
      validFrom: z.string().nullish(),
      validTo: z.string().nullish(),
    })
    .transform((data) => ({
      contactId: data['contactId'],
      amount: data['amount'],
      definitionId: data['definitionId'],
      timeStamp: data['timeStamp'],
      source: data['source'],
      description: data['description'],
      validFrom: data['validFrom'],
      validTo: data['validTo'],
    }));
});
