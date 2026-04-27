import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { IUpdateDirectorRes } from '../types/director.response'
import directorsApi from '../directors.service'

export default function useUpdateDirectorMutation() {
  const queryClient = useQueryClient()

  const updateDirectorMutation = useMutation<
    AxiosResponse<IUpdateDirectorRes>,
    Error,
    { id: string; name?: string; slug?: string }
  >({
    mutationFn: ({ id, ...data }) => directorsApi.updateDirector(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['director'] })
    }
  })

  return updateDirectorMutation
}
