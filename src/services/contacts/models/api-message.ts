import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiMessage: any = z.lazy(() => {
  return z.object({
    messageId: z.string().optional(),
    name: z.string().optional(),
    sendDateTime: z.string().optional(),
    type: z.string().optional(),
    source: z.string().optional(),
    isTransactional: z.boolean().optional(),
    status: z.string().optional(),
    messageLink: z.string().optional(),
    messageText: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ApiMessage} apiMessage
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {string}
 * @property {string}
 * @property {string}
 */
export type ApiMessage = z.infer<typeof apiMessage>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiMessageResponse: any = z.lazy(() => {
  return z
    .object({
      messageId: z.string().optional(),
      name: z.string().optional(),
      sendDateTime: z.string().optional(),
      type: z.string().optional(),
      source: z.string().optional(),
      isTransactional: z.boolean().optional(),
      status: z.string().optional(),
      messageLink: z.string().optional(),
      messageText: z.string().optional(),
    })
    .transform((data) => ({
      messageId: data['messageId'],
      name: data['name'],
      sendDateTime: data['sendDateTime'],
      type: data['type'],
      source: data['source'],
      isTransactional: data['isTransactional'],
      status: data['status'],
      messageLink: data['messageLink'],
      messageText: data['messageText'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiMessageRequest: any = z.lazy(() => {
  return z
    .object({
      messageId: z.string().nullish(),
      name: z.string().nullish(),
      sendDateTime: z.string().nullish(),
      type: z.string().nullish(),
      source: z.string().nullish(),
      isTransactional: z.boolean().nullish(),
      status: z.string().nullish(),
      messageLink: z.string().nullish(),
      messageText: z.string().nullish(),
    })
    .transform((data) => ({
      messageId: data['messageId'],
      name: data['name'],
      sendDateTime: data['sendDateTime'],
      type: data['type'],
      source: data['source'],
      isTransactional: data['isTransactional'],
      status: data['status'],
      messageLink: data['messageLink'],
      messageText: data['messageText'],
    }));
});
