import { z } from 'zod';

/**
 * The shape of the model inside the application code - what the users use
 */
export const idName: any = z.lazy(() => {
  return z.object({
    id: z.string().optional(),
    name: z.string().optional(),
  });
});

/**
 *
 * @typedef  {IdName} idName
 * @property {string}
 * @property {string}
 */
export type IdName = z.infer<typeof idName>;

/**
 * The shape of the model mapping from the api schema into the application shape.
 * Is equal to application shape if all property names match the api schema
 */
export const idNameResponse: any = z.lazy(() => {
  return z
    .object({
      id: z.string().optional(),
      name: z.string().optional(),
    })
    .transform((data) => ({
      id: data['id'],
      name: data['name'],
    }));
});

/**
 * The shape of the model mapping from the application shape into the api schema.
 * Is equal to application shape if all property names match the api schema
 */
export const idNameRequest: any = z.lazy(() => {
  return z.object({ id: z.string().nullish(), name: z.string().nullish() }).transform((data) => ({
    id: data['id'],
    name: data['name'],
  }));
});
