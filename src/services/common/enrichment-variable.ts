// This file was generated by liblab | https://liblab.com/

import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const enrichmentVariable = z.object({
  bciVariableId: z.string().optional(),
  bciValue: z.string().optional(),
  variableName: z.string().optional(),
  value: z.string().optional(),
  precision: z.string().optional(),
});

/**
 * An enrichment value for a certain BCI variable
 * @typedef  {EnrichmentVariable} enrichmentVariable - An enrichment value for a certain BCI variable - An enrichment value for a certain BCI variable
 * @property {string} - BCI variable identifier
 * @property {string} - BCI Value
 * @property {string} - Variable name in Voyado
 * @property {string} - Mapped value in Voyado
 * @property {string} - Value precision from BCI
 */
export type EnrichmentVariable = z.infer<typeof enrichmentVariable>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const enrichmentVariableResponse = z
  .object({
    bciVariableId: z.string().optional(),
    bciValue: z.string().optional(),
    variableName: z.string().optional(),
    value: z.string().optional(),
    precision: z.string().optional(),
  })
  .transform((data) => ({
    bciVariableId: data['bciVariableId'],
    bciValue: data['bciValue'],
    variableName: data['variableName'],
    value: data['value'],
    precision: data['precision'],
  }));

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const enrichmentVariableRequest = z
  .object({
    bciVariableId: z.string().nullish(),
    bciValue: z.string().nullish(),
    variableName: z.string().nullish(),
    value: z.string().nullish(),
    precision: z.string().nullish(),
  })
  .transform((data) => ({
    bciVariableId: data['bciVariableId'],
    bciValue: data['bciValue'],
    variableName: data['variableName'],
    value: data['value'],
    precision: data['precision'],
  }));