// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const apiStore: any = z.lazy(() => {
  return z.object({
    name: z.string().optional(),
    city: z.string().optional(),
    countryCode: z.string().optional(),
    county: z.string().optional(),
    email: z.string().optional(),
    adjacentZipCodes: z.string().optional(),
    emailUnsubscribeText: z.string().optional(),
    emailViewOnlineText: z.string().optional(),
    externalId: z.string().optional(),
    footerHtml: z.string().optional(),
    headerHtml: z.string().optional(),
    homepage: z.string().optional(),
    phoneNumber: z.string().optional(),
    region: z.string().optional(),
    senderAddress: z.string().optional(),
    senderName: z.string().optional(),
    street: z.string().optional(),
    type: z.string().optional(),
    zipCode: z.string().optional(),
    active: z.boolean().optional(),
    timeZone: z.string().optional(),
  });
});

/**
 *
 * @typedef  {ApiStore} apiStore
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {string}
 */
export type ApiStore = z.infer<typeof apiStore>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const apiStoreResponse: any = z.lazy(() => {
  return z
    .object({
      name: z.string().optional(),
      city: z.string().optional(),
      countryCode: z.string().optional(),
      county: z.string().optional(),
      email: z.string().optional(),
      adjacentZipCodes: z.string().optional(),
      emailUnsubscribeText: z.string().optional(),
      emailViewOnlineText: z.string().optional(),
      externalId: z.string().optional(),
      footerHtml: z.string().optional(),
      headerHtml: z.string().optional(),
      homepage: z.string().optional(),
      phoneNumber: z.string().optional(),
      region: z.string().optional(),
      senderAddress: z.string().optional(),
      senderName: z.string().optional(),
      street: z.string().optional(),
      type: z.string().optional(),
      zipCode: z.string().optional(),
      active: z.boolean().optional(),
      timeZone: z.string().optional(),
    })
    .transform((data) => ({
      name: data['name'],
      city: data['city'],
      countryCode: data['countryCode'],
      county: data['county'],
      email: data['email'],
      adjacentZipCodes: data['adjacentZipCodes'],
      emailUnsubscribeText: data['emailUnsubscribeText'],
      emailViewOnlineText: data['emailViewOnlineText'],
      externalId: data['externalId'],
      footerHtml: data['footerHtml'],
      headerHtml: data['headerHtml'],
      homepage: data['homepage'],
      phoneNumber: data['phoneNumber'],
      region: data['region'],
      senderAddress: data['senderAddress'],
      senderName: data['senderName'],
      street: data['street'],
      type: data['type'],
      zipCode: data['zipCode'],
      active: data['active'],
      timeZone: data['timeZone'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const apiStoreRequest: any = z.lazy(() => {
  return z
    .object({
      name: z.string().nullish(),
      city: z.string().nullish(),
      countryCode: z.string().nullish(),
      county: z.string().nullish(),
      email: z.string().nullish(),
      adjacentZipCodes: z.string().nullish(),
      emailUnsubscribeText: z.string().nullish(),
      emailViewOnlineText: z.string().nullish(),
      externalId: z.string().nullish(),
      footerHtml: z.string().nullish(),
      headerHtml: z.string().nullish(),
      homepage: z.string().nullish(),
      phoneNumber: z.string().nullish(),
      region: z.string().nullish(),
      senderAddress: z.string().nullish(),
      senderName: z.string().nullish(),
      street: z.string().nullish(),
      type: z.string().nullish(),
      zipCode: z.string().nullish(),
      active: z.boolean().nullish(),
      timeZone: z.string().nullish(),
    })
    .transform((data) => ({
      name: data['name'],
      city: data['city'],
      countryCode: data['countryCode'],
      county: data['county'],
      email: data['email'],
      adjacentZipCodes: data['adjacentZipCodes'],
      emailUnsubscribeText: data['emailUnsubscribeText'],
      emailViewOnlineText: data['emailViewOnlineText'],
      externalId: data['externalId'],
      footerHtml: data['footerHtml'],
      headerHtml: data['headerHtml'],
      homepage: data['homepage'],
      phoneNumber: data['phoneNumber'],
      region: data['region'],
      senderAddress: data['senderAddress'],
      senderName: data['senderName'],
      street: data['street'],
      type: data['type'],
      zipCode: data['zipCode'],
      active: data['active'],
      timeZone: data['timeZone'],
    }));
});
