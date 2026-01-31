import { z } from 'zod'

export const loginSchema = () => {
  return z.object({
    email: z.email({ message: 'Email invalid' }),
    password: z
      .string()
      .min(6, { message: 'Password min 6 characters' })
      .max(32, { message: 'Password max 32 characters' })
  })
}

export type LoginSchema = z.infer<ReturnType<typeof loginSchema>>
