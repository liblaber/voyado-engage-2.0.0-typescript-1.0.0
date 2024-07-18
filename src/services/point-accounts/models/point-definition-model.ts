import { z } from 'zod';
import { iHypermediaLink, iHypermediaLinkRequest, iHypermediaLinkResponse } from '../../common/i-hypermedia-link';

/**
 * The shape of the model inside the application code - what the users use
 */
export const pointDefinitionModel: any = z.lazy(() => {
  return z.object({
    description: z.string().optional(),
    id: z.number().optional(),
    name: z.string().optional(),
    links: z.array(iHypermediaLink).optional(),
  });
});

/**
 *
 * @typedef  {PointDefinitionModel} pointDefinitionModel
 * @property {string}
 * @property {number}
 * @property {string}
 * @property {IHypermediaLink[]}
 */
export type PointDefinitionModel = z.infer<typeof pointDefinitionModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const pointDefinitionModelResponse: any = z.lazy(() => {
  return z
    .object({
      description: z.string().optional(),
      id: z.number().optional(),
      name: z.string().optional(),
      links: z.array(iHypermediaLinkResponse).optional(),
    })
    .transform((data) => ({
      description: data['description'],
      id: data['id'],
      name: data['name'],
      links: data['links'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const pointDefinitionModelRequest: any = z.lazy(() => {
  return z
    .object({
      description: z.string().nullish(),
      id: z.number().nullish(),
      name: z.string().nullish(),
      links: z.array(iHypermediaLinkRequest).nullish(),
    })
    .transform((data) => ({
      description: data['description'],
      id: data['id'],
      name: data['name'],
      links: data['links'],
    }));
});
