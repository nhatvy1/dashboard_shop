import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { ICreateDirectorRes } from '../types/director.response'
import directorsApi from '../directors.service'

export default function useCreateDirectorMutation() {
  const queryClient = useQueryClient()

  const createDirectorMutation = useMutation<
    AxiosResponse<ICreateDirectorRes>,
    Error,
    { name: string; slug: string }
  >({
    mutationFn: (data) => directorsApi.createDirector(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['director'] })
    }
  })

  return createDirectorMutation
}
