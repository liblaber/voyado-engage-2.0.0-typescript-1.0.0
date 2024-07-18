import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const purchaseHistorySummary: any = z.lazy(() => {
  return z.object({
    lastUpdated: z.string().optional(),
    purchaseAmountAll: z.number().optional(),
    numberOfArticlePurchasesAll: z.number().optional(),
    averageReceiptAll: z.number().optional(),
    latestReceiptDate: z.string().optional(),
    purchaseFrequencyAll: z.number().optional(),
    purchaseAmountLastYear: z.number().optional(),
    numberOfArticlePurchasesLastYear: z.number().optional(),
    averageReceiptLastYear: z.number().optional(),
    purchaseFrequencyLastYear: z.number().optional(),
    purchaseAmountLastTwoYears: z.number().optional(),
    numberOfArticlePurchasesLastTwoYears: z.number().optional(),
    averageReceiptLastTwoYears: z.number().optional(),
    purchaseFrequencyLastTwoYears: z.number().optional(),
  });
});

/**
 *
 * @typedef  {PurchaseHistorySummary} purchaseHistorySummary
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type PurchaseHistorySummary = z.infer<typeof purchaseHistorySummary>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const purchaseHistorySummaryResponse: any = z.lazy(() => {
  return z
    .object({
      lastUpdated: z.string().optional(),
      purchaseAmountAll: z.number().optional(),
      numberOfArticlePurchasesAll: z.number().optional(),
      averageReceiptAll: z.number().optional(),
      latestReceiptDate: z.string().optional(),
      purchaseFrequencyAll: z.number().optional(),
      purchaseAmountLastYear: z.number().optional(),
      numberOfArticlePurchasesLastYear: z.number().optional(),
      averageReceiptLastYear: z.number().optional(),
      purchaseFrequencyLastYear: z.number().optional(),
      purchaseAmountLastTwoYears: z.number().optional(),
      numberOfArticlePurchasesLastTwoYears: z.number().optional(),
      averageReceiptLastTwoYears: z.number().optional(),
      purchaseFrequencyLastTwoYears: z.number().optional(),
    })
    .transform((data) => ({
      lastUpdated: data['lastUpdated'],
      purchaseAmountAll: data['purchaseAmountAll'],
      numberOfArticlePurchasesAll: data['numberOfArticlePurchasesAll'],
      averageReceiptAll: data['averageReceiptAll'],
      latestReceiptDate: data['latestReceiptDate'],
      purchaseFrequencyAll: data['purchaseFrequencyAll'],
      purchaseAmountLastYear: data['purchaseAmountLastYear'],
      numberOfArticlePurchasesLastYear: data['numberOfArticlePurchasesLastYear'],
      averageReceiptLastYear: data['averageReceiptLastYear'],
      purchaseFrequencyLastYear: data['purchaseFrequencyLastYear'],
      purchaseAmountLastTwoYears: data['purchaseAmountLastTwoYears'],
      numberOfArticlePurchasesLastTwoYears: data['numberOfArticlePurchasesLastTwoYears'],
      averageReceiptLastTwoYears: data['averageReceiptLastTwoYears'],
      purchaseFrequencyLastTwoYears: data['purchaseFrequencyLastTwoYears'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const purchaseHistorySummaryRequest: any = z.lazy(() => {
  return z
    .object({
      lastUpdated: z.string().nullish(),
      purchaseAmountAll: z.number().nullish(),
      numberOfArticlePurchasesAll: z.number().nullish(),
      averageReceiptAll: z.number().nullish(),
      latestReceiptDate: z.string().nullish(),
      purchaseFrequencyAll: z.number().nullish(),
      purchaseAmountLastYear: z.number().nullish(),
      numberOfArticlePurchasesLastYear: z.number().nullish(),
      averageReceiptLastYear: z.number().nullish(),
      purchaseFrequencyLastYear: z.number().nullish(),
      purchaseAmountLastTwoYears: z.number().nullish(),
      numberOfArticlePurchasesLastTwoYears: z.number().nullish(),
      averageReceiptLastTwoYears: z.number().nullish(),
      purchaseFrequencyLastTwoYears: z.number().nullish(),
    })
    .transform((data) => ({
      lastUpdated: data['lastUpdated'],
      purchaseAmountAll: data['purchaseAmountAll'],
      numberOfArticlePurchasesAll: data['numberOfArticlePurchasesAll'],
      averageReceiptAll: data['averageReceiptAll'],
      latestReceiptDate: data['latestReceiptDate'],
      purchaseFrequencyAll: data['purchaseFrequencyAll'],
      purchaseAmountLastYear: data['purchaseAmountLastYear'],
      numberOfArticlePurchasesLastYear: data['numberOfArticlePurchasesLastYear'],
      averageReceiptLastYear: data['averageReceiptLastYear'],
      purchaseFrequencyLastYear: data['purchaseFrequencyLastYear'],
      purchaseAmountLastTwoYears: data['purchaseAmountLastTwoYears'],
      numberOfArticlePurchasesLastTwoYears: data['numberOfArticlePurchasesLastTwoYears'],
      averageReceiptLastTwoYears: data['averageReceiptLastTwoYears'],
      purchaseFrequencyLastTwoYears: data['purchaseFrequencyLastTwoYears'],
    }));
});
