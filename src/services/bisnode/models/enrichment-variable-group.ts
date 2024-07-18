import { z } from 'zod';
import { enrichmentVariable, enrichmentVariableRequest, enrichmentVariableResponse } from './enrichment-variable';

/**
 * The shape of the model inside the application code - what the users use
 */
export const enrichmentVariableGroup: any = z.lazy(() => {
  return z.object({
    bciGroupId: z.string().optional(),
    groupName: z.string().optional(),
    variables: z.array(enrichmentVariable).optional(),
  });
});

/**
 * Grouped BCI enrichment varioables
 * @typedef  {EnrichmentVariableGroup} enrichmentVariableGroup - Grouped BCI enrichment varioables - Grouped BCI enrichment varioables
 * @property {string} - BCI group identifier
 * @property {string} - Group name in Voyado
 * @property {EnrichmentVariable[]} - Variables in group
 */
export type EnrichmentVariableGroup = z.infer<typeof enrichmentVariableGroup>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const enrichmentVariableGroupResponse: any = z.lazy(() => {
  return z
    .object({
      bciGroupId: z.string().optional(),
      groupName: z.string().optional(),
      variables: z.array(enrichmentVariableResponse).optional(),
    })
    .transform((data) => ({
      bciGroupId: data['bciGroupId'],
      groupName: data['groupName'],
      variables: data['variables'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const enrichmentVariableGroupRequest: any = z.lazy(() => {
  return z
    .object({
      bciGroupId: z.string().nullish(),
      groupName: z.string().nullish(),
      variables: z.array(enrichmentVariableRequest).nullish(),
    })
    .transform((data) => ({
      bciGroupId: data['bciGroupId'],
      groupName: data['groupName'],
      variables: data['variables'],
    }));
});
