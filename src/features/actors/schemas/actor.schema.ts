import { z } from 'zod'

export const createActorSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  slug: z.string().min(1, 'Slug is required')
})

export const updateActorSchema = z.object({
  name: z.string().min(1, 'Name is required').optional(),
  slug: z.string().min(1, 'Slug is required').optional()
})

export type CreateActorFormData = z.infer<typeof createActorSchema>
export type UpdateActorFormData = z.infer<typeof updateActorSchema>
