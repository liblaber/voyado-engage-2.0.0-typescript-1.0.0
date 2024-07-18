import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const importTransactionsObject: any = z.lazy(() => {
  return z.object({
    receipts: z.any().optional(),
  });
});

/**
 *
 * @typedef  {ImportTransactionsObject} importTransactionsObject
 * @property {any}
 */
export type ImportTransactionsObject = z.infer<typeof importTransactionsObject>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const importTransactionsObjectResponse: any = z.lazy(() => {
  return z
    .object({
      receipts: z.any().optional(),
    })
    .transform((data) => ({
      receipts: data['receipts'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const importTransactionsObjectRequest: any = z.lazy(() => {
  return z.object({ receipts: z.any().nullish() }).transform((data) => ({
    receipts: data['receipts'],
  }));
});
