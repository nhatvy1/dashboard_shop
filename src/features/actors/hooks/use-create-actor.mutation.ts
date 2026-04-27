import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { ICreateActorRes } from '../types/actor.response'
import actorsApi from '../actors.service'

export default function useCreateActorMutation() {
  const queryClient = useQueryClient()

  const createActorMutation = useMutation<
    AxiosResponse<ICreateActorRes>,
    Error,
    { name: string; slug: string }
  >({
    mutationFn: (data) => actorsApi.createActor(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['actor'] })
    }
  })

  return createActorMutation
}
