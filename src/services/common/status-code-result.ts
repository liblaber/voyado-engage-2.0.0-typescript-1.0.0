// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';
import { statusCode } from './status-code';

/**
 * The shape of the model inside the application code - what the users use
 */
export const statusCodeResult: any = z.lazy(() => {
  return z.object({
    statusCode: statusCode.optional(),
    request: z.any().optional(),
  });
});

/**
 *
 * @typedef  {StatusCodeResult} statusCodeResult
 * @property {StatusCode}
 * @property {any}
 */
export type StatusCodeResult = z.infer<typeof statusCodeResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const statusCodeResultResponse: any = z.lazy(() => {
  return z
    .object({
      statusCode: statusCode.optional(),
      request: z.any().optional(),
    })
    .transform((data) => ({
      statusCode: data['statusCode'],
      request: data['request'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const statusCodeResultRequest: any = z.lazy(() => {
  return z.object({ statusCode: statusCode.nullish(), request: z.any().nullish() }).transform((data) => ({
    statusCode: data['statusCode'],
    request: data['request'],
  }));
});
