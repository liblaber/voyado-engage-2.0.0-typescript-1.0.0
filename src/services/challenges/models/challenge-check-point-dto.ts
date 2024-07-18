import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const challengeCheckPointDto: any = z.lazy(() => {
  return z.object({
    definitionId: z.string().optional(),
    contactId: z.string().optional(),
    checkpointAmount: z.number().optional(),
  });
});

/**
 *
 * @typedef  {ChallengeCheckPointDto} challengeCheckPointDto
 * @property {string}
 * @property {string}
 * @property {number}
 */
export type ChallengeCheckPointDto = z.infer<typeof challengeCheckPointDto>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const challengeCheckPointDtoResponse: any = z.lazy(() => {
  return z
    .object({
      definitionId: z.string().optional(),
      contactId: z.string().optional(),
      checkpointAmount: z.number().optional(),
    })
    .transform((data) => ({
      definitionId: data['definitionId'],
      contactId: data['contactId'],
      checkpointAmount: data['checkpointAmount'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const challengeCheckPointDtoRequest: any = z.lazy(() => {
  return z
    .object({
      definitionId: z.string().nullish(),
      contactId: z.string().nullish(),
      checkpointAmount: z.number().nullish(),
    })
    .transform((data) => ({
      definitionId: data['definitionId'],
      contactId: data['contactId'],
      checkpointAmount: data['checkpointAmount'],
    }));
});
