import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import directorsApi from '../directors.service'
import type { IBaseRes } from '@/shared/commons/types/response'

export default function useDeleteDirectorMutation() {
  const queryClient = useQueryClient()

  const deleteDirectorMutation = useMutation<
    AxiosResponse<IBaseRes<void>>,
    Error,
    string
  >({
    mutationFn: (id) => directorsApi.deleteDirector(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['director'] })
    }
  })

  return deleteDirectorMutation
}
