import { z } from 'zod';
import { bonusPointTransactionModelType } from './bonus-point-transaction-model-type';

/**
 * The shape of the model inside the application code - what the users use
 */
export const bonusPointTransactionModel: any = z.lazy(() => {
  return z.object({
    amount: z.number().optional(),
    transactionDateTime: z.string().optional(),
    description: z.string().optional(),
    type: bonusPointTransactionModelType.optional(),
    id: z.string().optional(),
    automationBonusAdjustmentReason: z.string().optional(),
  });
});

/**
 *
 * @typedef  {BonusPointTransactionModel} bonusPointTransactionModel
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {BonusPointTransactionModelType}
 * @property {string}
 * @property {string}
 */
export type BonusPointTransactionModel = z.infer<typeof bonusPointTransactionModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const bonusPointTransactionModelResponse: any = z.lazy(() => {
  return z
    .object({
      amount: z.number().optional(),
      transactionDateTime: z.string().optional(),
      description: z.string().optional(),
      type: bonusPointTransactionModelType.optional(),
      id: z.string().optional(),
      automationBonusAdjustmentReason: z.string().optional(),
    })
    .transform((data) => ({
      amount: data['amount'],
      transactionDateTime: data['transactionDateTime'],
      description: data['description'],
      type: data['type'],
      id: data['id'],
      automationBonusAdjustmentReason: data['automationBonusAdjustmentReason'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const bonusPointTransactionModelRequest: any = z.lazy(() => {
  return z
    .object({
      amount: z.number().nullish(),
      transactionDateTime: z.string().nullish(),
      description: z.string().nullish(),
      type: bonusPointTransactionModelType.nullish(),
      id: z.string().nullish(),
      automationBonusAdjustmentReason: z.string().nullish(),
    })
    .transform((data) => ({
      amount: data['amount'],
      transactionDateTime: data['transactionDateTime'],
      description: data['description'],
      type: data['type'],
      id: data['id'],
      automationBonusAdjustmentReason: data['automationBonusAdjustmentReason'],
    }));
});
