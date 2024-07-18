import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const promotionBasicPresentationModel: any = z.lazy(() => {
  return z.object({
    heading: z.string().optional(),
    description: z.string().optional(),
    link: z.string().optional(),
  });
});

/**
 * Following object is for get/set the presentational side of the promotion. 
This data uses to displey in different kind of views, for an example in Email messages etc.

This fields populates the "Presentation" section in the admin UI.
 * @typedef  {PromotionBasicPresentationModel} promotionBasicPresentationModel - Following object is for get/set the presentational side of the promotion. 
This data uses to displey in different kind of views, for an example in Email messages etc.

This fields populates the "Presentation" section in the admin UI. - Following object is for get/set the presentational side of the promotion. 
This data uses to displey in different kind of views, for an example in Email messages etc.

This fields populates the "Presentation" section in the admin UI.
 * @property {string} - Heading for the promotion.
Uses to show up in different kind of views.
 * @property {string} - Description for the promotion.
Uses to show up in different kind of views.
 * @property {string} - A external link for the promotion.
Uses to show up in different kind of views.
 */
export type PromotionBasicPresentationModel = z.infer<typeof promotionBasicPresentationModel>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const promotionBasicPresentationModelResponse: any = z.lazy(() => {
  return z
    .object({
      heading: z.string().optional(),
      description: z.string().optional(),
      link: z.string().optional(),
    })
    .transform((data) => ({
      heading: data['heading'],
      description: data['description'],
      link: data['link'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const promotionBasicPresentationModelRequest: any = z.lazy(() => {
  return z
    .object({ heading: z.string().nullish(), description: z.string().nullish(), link: z.string().nullish() })
    .transform((data) => ({
      heading: data['heading'],
      description: data['description'],
      link: data['link'],
    }));
});
