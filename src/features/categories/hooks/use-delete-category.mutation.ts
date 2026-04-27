import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import catesAPpi from '../categories.service'
import type { IBaseRes } from '@/shared/commons/types/response'

export default function useDeleteCategoryMutation() {
  const queryClient = useQueryClient()

  const deleteCategoryMutation = useMutation<
    AxiosResponse<IBaseRes<void>>,
    Error,
    string
  >({
    mutationFn: (id) => catesAPpi.deleteCategory(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['category'] })
    }
  })

  return deleteCategoryMutation
}