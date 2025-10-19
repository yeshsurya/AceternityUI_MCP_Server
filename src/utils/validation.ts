import { z } from 'zod';

const methodSchemas = {
  get_component: z.object({
    componentName: z.string().min(1).max(200)
  }),
  list_components: z.object({
    category: z.string().optional()
  }),
  search_components: z.object({
    query: z.string().min(1).max(200)
  }),
  get_component_details: z.object({
    componentName: z.string().min(1).max(200)
  }),
  get_component_example: z.object({
    componentName: z.string().min(1).max(200)
  })
};

export function validateAndSanitizeParams(method: string, params: any): any {
  const schema = methodSchemas[method as keyof typeof methodSchemas];

  if (!schema) {
    return params || {};
  }

  try {
    return schema.parse(params || {});
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(e => `${e.path.join('.')}: ${e.message}`).join(', ');
      throw new Error(`Validation failed: ${errors}`);
    }
    throw error;
  }
}
