import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const taxDetail: any = z.lazy(() => {
  return z.object({
    description: z.string().optional(),
    value: z.number().optional(),
    percent: z.number().optional(),
    totalIncludingTax: z.number().optional(),
    totalExcludingTax: z.number().optional(),
  });
});

/**
 *
 * @typedef  {TaxDetail} taxDetail
 * @property {string}
 * @property {number}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type TaxDetail = z.infer<typeof taxDetail>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const taxDetailResponse: any = z.lazy(() => {
  return z
    .object({
      description: z.string().optional(),
      value: z.number().optional(),
      percent: z.number().optional(),
      totalIncludingTax: z.number().optional(),
      totalExcludingTax: z.number().optional(),
    })
    .transform((data) => ({
      description: data['description'],
      value: data['value'],
      percent: data['percent'],
      totalIncludingTax: data['totalIncludingTax'],
      totalExcludingTax: data['totalExcludingTax'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const taxDetailRequest: any = z.lazy(() => {
  return z
    .object({
      description: z.string().nullish(),
      value: z.number().nullish(),
      percent: z.number().nullish(),
      totalIncludingTax: z.number().nullish(),
      totalExcludingTax: z.number().nullish(),
    })
    .transform((data) => ({
      description: data['description'],
      value: data['value'],
      percent: data['percent'],
      totalIncludingTax: data['totalIncludingTax'],
      totalExcludingTax: data['totalExcludingTax'],
    }));
});
