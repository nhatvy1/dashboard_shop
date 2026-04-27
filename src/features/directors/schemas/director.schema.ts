import { z } from 'zod'

export const createDirectorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required')
})

export const updateDirectorSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  slug: z.string().min(1, 'Slug is required').optional()
})

export type CreateDirectorFormData = z.infer<typeof createDirectorSchema>
export type UpdateDirectorFormData = z.infer<typeof updateDirectorSchema>
