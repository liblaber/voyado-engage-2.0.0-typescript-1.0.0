import { z } from 'zod';
import {
  pointTransactionToAccount,
  pointTransactionToAccountRequest,
  pointTransactionToAccountResponse,
} from './point-transaction-to-account';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pointTransactionToAccountResultModel: any = z.lazy(() => {
  return z.object({
    notAccepted: z.array(pointTransactionToAccount).optional(),
    errorMessages: z.array(z.string()).optional(),
    missingDefinitionIds: z.array(z.number()).optional(),
    missingContactIds: z.array(z.string()).optional(),
  });
});

/**
 *
 * @typedef  {PointTransactionToAccountResultModel} pointTransactionToAccountResultModel
 * @property {PointTransactionToAccount[]}
 * @property {string[]}
 * @property {number[]}
 * @property {string[]}
 */
export type PointTransactionToAccountResultModel = z.infer<typeof pointTransactionToAccountResultModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pointTransactionToAccountResultModelResponse: any = z.lazy(() => {
  return z
    .object({
      notAccepted: z.array(pointTransactionToAccountResponse).optional(),
      errorMessages: z.array(z.string()).optional(),
      missingDefinitionIds: z.array(z.number()).optional(),
      missingContactIds: z.array(z.string()).optional(),
    })
    .transform((data) => ({
      notAccepted: data['notAccepted'],
      errorMessages: data['errorMessages'],
      missingDefinitionIds: data['missingDefinitionIds'],
      missingContactIds: data['missingContactIds'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pointTransactionToAccountResultModelRequest: any = z.lazy(() => {
  return z
    .object({
      notAccepted: z.array(pointTransactionToAccountRequest).nullish(),
      errorMessages: z.array(z.string()).nullish(),
      missingDefinitionIds: z.array(z.number()).nullish(),
      missingContactIds: z.array(z.string()).nullish(),
    })
    .transform((data) => ({
      notAccepted: data['notAccepted'],
      errorMessages: data['errorMessages'],
      missingDefinitionIds: data['missingDefinitionIds'],
      missingContactIds: data['missingContactIds'],
    }));
});
