import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import actorsApi from '../actors.service'
import type { IBaseRes } from '@/shared/commons/types/response'

export default function useDeleteActorMutation() {
  const queryClient = useQueryClient()

  const deleteActorMutation = useMutation<
    AxiosResponse<IBaseRes<void>>,
    Error,
    string
  >({
    mutationFn: (id) => actorsApi.deleteActor(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['actor'] })
    }
  })

  return deleteActorMutation
}
