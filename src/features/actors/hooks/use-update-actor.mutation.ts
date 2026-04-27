import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { IUpdateActorRes } from '../types/actor.response'
import actorsApi from '../actors.service'

export default function useUpdateActorMutation() {
  const queryClient = useQueryClient()

  const updateActorMutation = useMutation<
    AxiosResponse<IUpdateActorRes>,
    Error,
    { id: string; name?: string; slug?: string }
  >({
    mutationFn: ({ id, ...data }) => actorsApi.updateActor(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['actor'] })
    }
  })

  return updateActorMutation
}
