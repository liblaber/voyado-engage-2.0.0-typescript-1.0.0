import { z } from 'zod';
import {
  challengeCheckPointDto,
  challengeCheckPointDtoRequest,
  challengeCheckPointDtoResponse,
} from './challenge-check-point-dto';

/**
 * The shape of the model inside the application code - what the users use
 */
export const addCheckpointToChallengeAssignmentResult: any = z.lazy(() => {
  return z.object({
    missingContactIds: z.array(z.string()).optional(),
    missingDefinitionIds: z.array(z.string()).optional(),
    notAccepted: z.array(challengeCheckPointDto).optional(),
  });
});

/**
 *
 * @typedef  {AddCheckpointToChallengeAssignmentResult} addCheckpointToChallengeAssignmentResult
 * @property {string[]}
 * @property {string[]}
 * @property {ChallengeCheckPointDto[]}
 */
export type AddCheckpointToChallengeAssignmentResult = z.infer<typeof addCheckpointToChallengeAssignmentResult>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const addCheckpointToChallengeAssignmentResultResponse: any = z.lazy(() => {
  return z
    .object({
      missingContactIds: z.array(z.string()).optional(),
      missingDefinitionIds: z.array(z.string()).optional(),
      notAccepted: z.array(challengeCheckPointDtoResponse).optional(),
    })
    .transform((data) => ({
      missingContactIds: data['missingContactIds'],
      missingDefinitionIds: data['missingDefinitionIds'],
      notAccepted: data['notAccepted'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const addCheckpointToChallengeAssignmentResultRequest: any = z.lazy(() => {
  return z
    .object({
      missingContactIds: z.array(z.string()).nullish(),
      missingDefinitionIds: z.array(z.string()).nullish(),
      notAccepted: z.array(challengeCheckPointDtoRequest).nullish(),
    })
    .transform((data) => ({
      missingContactIds: data['missingContactIds'],
      missingDefinitionIds: data['missingDefinitionIds'],
      notAccepted: data['notAccepted'],
    }));
});
