import { z } from 'zod';
import { searchKey } from './search-key';
import {
  unregisteredFromOnlineRegisterInformation,
  unregisteredFromOnlineRegisterInformationRequest,
  unregisteredFromOnlineRegisterInformationResponse,
} from './unregistered-from-online-register-information';

/**
 * The shape of the model inside the application code - what the users use
 */
export const contactSearchResult: any = z.lazy(() => {
  return z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    careOf: z.string().optional(),
    street: z.string().optional(),
    zipCode: z.string().optional(),
    city: z.string().optional(),
    birthDay: z.string().optional(),
    status: z.string().optional(),
    country: z.string().optional(),
    phoneNumber: z.string().optional(),
    mobilePhoneNumber: z.string().optional(),
    gender: z.string().optional(),
    searchKey: searchKey.optional(),
    unregisteredFromOnlineRegisterInformation: unregisteredFromOnlineRegisterInformation.optional(),
  });
});

/**
 *
 * @typedef  {ContactSearchResult} contactSearchResult
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
 * @property {SearchKey}
 * @property {UnregisteredFromOnlineRegisterInformation}
 */
export type ContactSearchResult = z.infer<typeof contactSearchResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const contactSearchResultResponse: any = z.lazy(() => {
  return z
    .object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      careOf: z.string().optional(),
      street: z.string().optional(),
      zipCode: z.string().optional(),
      city: z.string().optional(),
      birthDay: z.string().optional(),
      status: z.string().optional(),
      country: z.string().optional(),
      phoneNumber: z.string().optional(),
      mobilePhoneNumber: z.string().optional(),
      gender: z.string().optional(),
      searchKey: searchKey.optional(),
      unregisteredFromOnlineRegisterInformation: unregisteredFromOnlineRegisterInformationResponse.optional(),
    })
    .transform((data) => ({
      firstName: data['firstName'],
      lastName: data['lastName'],
      careOf: data['careOf'],
      street: data['street'],
      zipCode: data['zipCode'],
      city: data['city'],
      birthDay: data['birthDay'],
      status: data['status'],
      country: data['country'],
      phoneNumber: data['phoneNumber'],
      mobilePhoneNumber: data['mobilePhoneNumber'],
      gender: data['gender'],
      searchKey: data['searchKey'],
      unregisteredFromOnlineRegisterInformation: data['unregisteredFromOnlineRegisterInformation'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const contactSearchResultRequest: any = z.lazy(() => {
  return z
    .object({
      firstName: z.string().nullish(),
      lastName: z.string().nullish(),
      careOf: z.string().nullish(),
      street: z.string().nullish(),
      zipCode: z.string().nullish(),
      city: z.string().nullish(),
      birthDay: z.string().nullish(),
      status: z.string().nullish(),
      country: z.string().nullish(),
      phoneNumber: z.string().nullish(),
      mobilePhoneNumber: z.string().nullish(),
      gender: z.string().nullish(),
      searchKey: searchKey.nullish(),
      unregisteredFromOnlineRegisterInformation: unregisteredFromOnlineRegisterInformationRequest.nullish(),
    })
    .transform((data) => ({
      firstName: data['firstName'],
      lastName: data['lastName'],
      careOf: data['careOf'],
      street: data['street'],
      zipCode: data['zipCode'],
      city: data['city'],
      birthDay: data['birthDay'],
      status: data['status'],
      country: data['country'],
      phoneNumber: data['phoneNumber'],
      mobilePhoneNumber: data['mobilePhoneNumber'],
      gender: data['gender'],
      searchKey: data['searchKey'],
      unregisteredFromOnlineRegisterInformation: data['unregisteredFromOnlineRegisterInformation'],
    }));
});
