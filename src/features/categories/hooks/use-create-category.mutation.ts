import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { ICreateCatesRes } from '../types/category.response'
import catesAPpi from '../categories.service'

export default function useCreateCategoryMutation() {
  const queryClient = useQueryClient()

  const createCategoryMutation = useMutation<
    AxiosResponse<ICreateCatesRes>,
    Error,
    { name: string; slug: string }
  >({
    mutationFn: (data) => catesAPpi.createCategory(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    }
  })

  return createCategoryMutation
}