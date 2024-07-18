import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const memberStatusModel: any = z.lazy(() => {
  return z.object({
    statusColor: z.string().optional(),
    statusText: z.string().optional(),
    data: z.any().optional(),
  });
});

/**
 *
 * @typedef  {MemberStatusModel} memberStatusModel
 * @property {string}
 * @property {string}
 * @property {any}
 */
export type MemberStatusModel = z.infer<typeof memberStatusModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const memberStatusModelResponse: any = z.lazy(() => {
  return z
    .object({
      statusColor: z.string().optional(),
      statusText: z.string().optional(),
      data: z.any().optional(),
    })
    .transform((data) => ({
      statusColor: data['statusColor'],
      statusText: data['statusText'],
      data: data['data'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const memberStatusModelRequest: any = z.lazy(() => {
  return z
    .object({ statusColor: z.string().nullish(), statusText: z.string().nullish(), data: z.any().nullish() })
    .transform((data) => ({
      statusColor: data['statusColor'],
      statusText: data['statusText'],
      data: data['data'],
    }));
});
