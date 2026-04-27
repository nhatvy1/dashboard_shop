import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { IUpdateCatesRes } from '../types/category.response'
import catesApi from '../categories.service'

export default function useUpdateCategoryMutation() {
  const queryClient = useQueryClient()

  const updateCategoryMutation = useMutation<
    AxiosResponse<IUpdateCatesRes>,
    Error,
    { id: string; name?: string; slug?: string }
  >({
    mutationFn: ({ id, ...data }) => catesApi.updateCategory(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    }
  })

  return updateCategoryMutation
}