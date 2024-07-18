import { z } from 'zod';
import { iHypermediaLink, iHypermediaLinkRequest, iHypermediaLinkResponse } from '../../common/i-hypermedia-link';
import {
  challengeDefinitionModel,
  challengeDefinitionModelRequest,
  challengeDefinitionModelResponse,
} from './challenge-definition-model';

/**
 * The shape of the model inside the application code - what the users use
 */
export const challengeDefinitionModelsResult: any = z.lazy(() => {
  return z.object({
    links: z.array(iHypermediaLink).optional(),
    items: z.array(challengeDefinitionModel).optional(),
    totalCount: z.number().optional(),
    offset: z.number().optional(),
    count: z.number().optional(),
  });
});

/**
 *
 * @typedef  {ChallengeDefinitionModelsResult} challengeDefinitionModelsResult
 * @property {IHypermediaLink[]}
 * @property {ChallengeDefinitionModel[]}
 * @property {number}
 * @property {number}
 * @property {number}
 */
export type ChallengeDefinitionModelsResult = z.infer<typeof challengeDefinitionModelsResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const challengeDefinitionModelsResultResponse: any = z.lazy(() => {
  return z
    .object({
      links: z.array(iHypermediaLinkResponse).optional(),
      items: z.array(challengeDefinitionModelResponse).optional(),
      totalCount: z.number().optional(),
      offset: z.number().optional(),
      count: z.number().optional(),
    })
    .transform((data) => ({
      links: data['links'],
      items: data['items'],
      totalCount: data['totalCount'],
      offset: data['offset'],
      count: data['count'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const challengeDefinitionModelsResultRequest: any = z.lazy(() => {
  return z
    .object({
      links: z.array(iHypermediaLinkRequest).nullish(),
      items: z.array(challengeDefinitionModelRequest).nullish(),
      totalCount: z.number().nullish(),
      offset: z.number().nullish(),
      count: z.number().nullish(),
    })
    .transform((data) => ({
      links: data['links'],
      items: data['items'],
      totalCount: data['totalCount'],
      offset: data['offset'],
      count: data['count'],
    }));
});
