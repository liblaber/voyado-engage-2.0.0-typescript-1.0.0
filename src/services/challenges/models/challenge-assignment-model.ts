import { z } from 'zod';
import { challengeAssignmentModelStatus } from './challenge-assignment-model-status';
import { iHypermediaLink, iHypermediaLinkRequest, iHypermediaLinkResponse } from '../../common/i-hypermedia-link';

/**
 * The shape of the model inside the application code - what the users use
 */
export const challengeAssignmentModel: any = z.lazy(() => {
  return z.object({
    challengeCompletedOn: z.string().optional(),
    challengeEnd: z.string().optional(),
    challengeId: z.string().optional(),
    challengeStart: z.string().optional(),
    completedCheckpoints: z.number().optional(),
    imageUrl: z.string().optional(),
    contactId: z.string().optional(),
    id: z.string().optional(),
    isActive: z.boolean().optional(),
    isChallengeCompleted: z.boolean().optional(),
    latestCheckpointAddedOn: z.string().optional(),
    requiredCheckpoints: z.number().optional(),
    status: challengeAssignmentModelStatus.optional(),
    links: z.array(iHypermediaLink).optional(),
  });
});

/**
 *
 * @typedef  {ChallengeAssignmentModel} challengeAssignmentModel
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {boolean}
 * @property {boolean}
 * @property {string}
 * @property {number}
 * @property {ChallengeAssignmentModelStatus}
 * @property {IHypermediaLink[]}
 */
export type ChallengeAssignmentModel = z.infer<typeof challengeAssignmentModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const challengeAssignmentModelResponse: any = z.lazy(() => {
  return z
    .object({
      challengeCompletedOn: z.string().optional(),
      challengeEnd: z.string().optional(),
      challengeId: z.string().optional(),
      challengeStart: z.string().optional(),
      completedCheckpoints: z.number().optional(),
      imageUrl: z.string().optional(),
      contactId: z.string().optional(),
      id: z.string().optional(),
      isActive: z.boolean().optional(),
      isChallengeCompleted: z.boolean().optional(),
      latestCheckpointAddedOn: z.string().optional(),
      requiredCheckpoints: z.number().optional(),
      status: challengeAssignmentModelStatus.optional(),
      links: z.array(iHypermediaLinkResponse).optional(),
    })
    .transform((data) => ({
      challengeCompletedOn: data['challengeCompletedOn'],
      challengeEnd: data['challengeEnd'],
      challengeId: data['challengeId'],
      challengeStart: data['challengeStart'],
      completedCheckpoints: data['completedCheckpoints'],
      imageUrl: data['imageUrl'],
      contactId: data['contactId'],
      id: data['id'],
      isActive: data['isActive'],
      isChallengeCompleted: data['isChallengeCompleted'],
      latestCheckpointAddedOn: data['latestCheckpointAddedOn'],
      requiredCheckpoints: data['requiredCheckpoints'],
      status: data['status'],
      links: data['links'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const challengeAssignmentModelRequest: any = z.lazy(() => {
  return z
    .object({
      challengeCompletedOn: z.string().nullish(),
      challengeEnd: z.string().nullish(),
      challengeId: z.string().nullish(),
      challengeStart: z.string().nullish(),
      completedCheckpoints: z.number().nullish(),
      imageUrl: z.string().nullish(),
      contactId: z.string().nullish(),
      id: z.string().nullish(),
      isActive: z.boolean().nullish(),
      isChallengeCompleted: z.boolean().nullish(),
      latestCheckpointAddedOn: z.string().nullish(),
      requiredCheckpoints: z.number().nullish(),
      status: challengeAssignmentModelStatus.nullish(),
      links: z.array(iHypermediaLinkRequest).nullish(),
    })
    .transform((data) => ({
      challengeCompletedOn: data['challengeCompletedOn'],
      challengeEnd: data['challengeEnd'],
      challengeId: data['challengeId'],
      challengeStart: data['challengeStart'],
      completedCheckpoints: data['completedCheckpoints'],
      imageUrl: data['imageUrl'],
      contactId: data['contactId'],
      id: data['id'],
      isActive: data['isActive'],
      isChallengeCompleted: data['isChallengeCompleted'],
      latestCheckpointAddedOn: data['latestCheckpointAddedOn'],
      requiredCheckpoints: data['requiredCheckpoints'],
      status: data['status'],
      links: data['links'],
    }));
});
