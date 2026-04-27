import { z } from 'zod'

export const createCountrySchema = z.object({
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required')
})

export const updateCountrySchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  slug: z.string().min(1, 'Slug is required').optional()
})

export type CreateCountryFormData = z.infer<typeof createCountrySchema>
export type UpdateCountryFormData = z.infer<typeof updateCountrySchema>
