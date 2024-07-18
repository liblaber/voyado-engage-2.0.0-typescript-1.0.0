import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const interactionModel: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    contactId: z.string().optional(),
    schemaId: z.string().optional(),
    createdDate: z.string().optional(),
    payload: z.any().optional(),
  });
});

/**
 *
 * @typedef  {InteractionModel} interactionModel
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {any}
 */
export type InteractionModel = z.infer<typeof interactionModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionModelResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      contactId: z.string().optional(),
      schemaId: z.string().optional(),
      createdDate: z.string().optional(),
      payload: z.any().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      contactId: data['contactId'],
      schemaId: data['schemaId'],
      createdDate: data['createdDate'],
      payload: data['payload'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const interactionModelRequest: any = z.lazy(() => {
  return z
    .object({
      id: z.string().nullish(),
      contactId: z.string().nullish(),
      schemaId: z.string().nullish(),
      createdDate: z.string().nullish(),
      payload: z.any().nullish(),
    })
    .transform((data) => ({
      id: data['id'],
      contactId: data['contactId'],
      schemaId: data['schemaId'],
      createdDate: data['createdDate'],
      payload: data['payload'],
    }));
});
