// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const sendSmsRequest: any = z.lazy(() => {
  return z.object({
    description: z.string().optional(),
    invoiceReference: z.string().optional(),
    message: z.string().optional(),
    phoneNumbers: z.array(z.string()).optional(),
    sender: z.string().optional(),
  });
});

/**
 *
 * @typedef  {SendSmsRequest} sendSmsRequest
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string[]}
 * @property {string}
 */
export type SendSmsRequest = z.infer<typeof sendSmsRequest>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const sendSmsRequestResponse: any = z.lazy(() => {
  return z
    .object({
      description: z.string().optional(),
      invoiceReference: z.string().optional(),
      message: z.string().optional(),
      phoneNumbers: z.array(z.string()).optional(),
      sender: z.string().optional(),
    })
    .transform((data) => ({
      description: data['description'],
      invoiceReference: data['invoiceReference'],
      message: data['message'],
      phoneNumbers: data['phoneNumbers'],
      sender: data['sender'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const sendSmsRequestRequest: any = z.lazy(() => {
  return z
    .object({
      description: z.string().nullish(),
      invoiceReference: z.string().nullish(),
      message: z.string().nullish(),
      phoneNumbers: z.array(z.string()).nullish(),
      sender: z.string().nullish(),
    })
    .transform((data) => ({
      description: data['description'],
      invoiceReference: data['invoiceReference'],
      message: data['message'],
      phoneNumbers: data['phoneNumbers'],
      sender: data['sender'],
    }));
});
