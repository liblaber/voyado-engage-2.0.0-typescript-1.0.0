import { z } from 'zod';
import { checkpointAssignOn } from './checkpoint-assign-on';
import { challengeDefinitionModelStatus } from './challenge-definition-model-status';
import { iHypermediaLink, iHypermediaLinkRequest, iHypermediaLinkResponse } from '../../common/i-hypermedia-link';

/**
 * The shape of the model inside the application code - what the users use
 */
export const challengeDefinitionModel: any = z.lazy(() => {
  return z.object({
    checkpointAssignOn: checkpointAssignOn.optional(),
    checkpointAssignOnAmount: z.number().optional(),
    createdBy: z.string().optional(),
    createdOn: z.string().optional(),
    description: z.string().optional(),
    expirationMonths: z.number().optional(),
    id: z.string().optional(),
    isContactConsentRequired: z.boolean().optional(),
    isScheduled: z.boolean().optional(),
    modifiedBy: z.string().optional(),
    modifiedOn: z.string().optional(),
    name: z.string().optional(),
    requiredNumberOfCheckpoints: z.number().optional(),
    scheduledFrom: z.string().optional(),
    scheduledTo: z.string().optional(),
    status: challengeDefinitionModelStatus.optional(),
    links: z.array(iHypermediaLink).optional(),
  });
});

/**
 *
 * @typedef  {ChallengeDefinitionModel} challengeDefinitionModel
 * @property {CheckpointAssignOn}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {boolean}
 * @property {boolean}
 * @property {string}
 * @property {string}
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {string}
 * @property {ChallengeDefinitionModelStatus}
 * @property {IHypermediaLink[]}
 */
export type ChallengeDefinitionModel = z.infer<typeof challengeDefinitionModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const challengeDefinitionModelResponse: any = z.lazy(() => {
  return z
    .object({
      checkpointAssignOn: checkpointAssignOn.optional(),
      checkpointAssignOnAmount: z.number().optional(),
      createdBy: z.string().optional(),
      createdOn: z.string().optional(),
      description: z.string().optional(),
      expirationMonths: z.number().optional(),
      id: z.string().optional(),
      isContactConsentRequired: z.boolean().optional(),
      isScheduled: z.boolean().optional(),
      modifiedBy: z.string().optional(),
      modifiedOn: z.string().optional(),
      name: z.string().optional(),
      requiredNumberOfCheckpoints: z.number().optional(),
      scheduledFrom: z.string().optional(),
      scheduledTo: z.string().optional(),
      status: challengeDefinitionModelStatus.optional(),
      links: z.array(iHypermediaLinkResponse).optional(),
    })
    .transform((data) => ({
      checkpointAssignOn: data['checkpointAssignOn'],
      checkpointAssignOnAmount: data['checkpointAssignOnAmount'],
      createdBy: data['createdBy'],
      createdOn: data['createdOn'],
      description: data['description'],
      expirationMonths: data['expirationMonths'],
      id: data['id'],
      isContactConsentRequired: data['isContactConsentRequired'],
      isScheduled: data['isScheduled'],
      modifiedBy: data['modifiedBy'],
      modifiedOn: data['modifiedOn'],
      name: data['name'],
      requiredNumberOfCheckpoints: data['requiredNumberOfCheckpoints'],
      scheduledFrom: data['scheduledFrom'],
      scheduledTo: data['scheduledTo'],
      status: data['status'],
      links: data['links'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const challengeDefinitionModelRequest: any = z.lazy(() => {
  return z
    .object({
      checkpointAssignOn: checkpointAssignOn.nullish(),
      checkpointAssignOnAmount: z.number().nullish(),
      createdBy: z.string().nullish(),
      createdOn: z.string().nullish(),
      description: z.string().nullish(),
      expirationMonths: z.number().nullish(),
      id: z.string().nullish(),
      isContactConsentRequired: z.boolean().nullish(),
      isScheduled: z.boolean().nullish(),
      modifiedBy: z.string().nullish(),
      modifiedOn: z.string().nullish(),
      name: z.string().nullish(),
      requiredNumberOfCheckpoints: z.number().nullish(),
      scheduledFrom: z.string().nullish(),
      scheduledTo: z.string().nullish(),
      status: challengeDefinitionModelStatus.nullish(),
      links: z.array(iHypermediaLinkRequest).nullish(),
    })
    .transform((data) => ({
      checkpointAssignOn: data['checkpointAssignOn'],
      checkpointAssignOnAmount: data['checkpointAssignOnAmount'],
      createdBy: data['createdBy'],
      createdOn: data['createdOn'],
      description: data['description'],
      expirationMonths: data['expirationMonths'],
      id: data['id'],
      isContactConsentRequired: data['isContactConsentRequired'],
      isScheduled: data['isScheduled'],
      modifiedBy: data['modifiedBy'],
      modifiedOn: data['modifiedOn'],
      name: data['name'],
      requiredNumberOfCheckpoints: data['requiredNumberOfCheckpoints'],
      scheduledFrom: data['scheduledFrom'],
      scheduledTo: data['scheduledTo'],
      status: data['status'],
      links: data['links'],
    }));
});
