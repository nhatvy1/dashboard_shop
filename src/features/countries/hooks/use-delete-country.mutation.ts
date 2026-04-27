import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import countriesApi from '../countries.service'
import type { IBaseRes } from '@/shared/commons/types/response'

export default function useDeleteCountryMutation() {
  const queryClient = useQueryClient()

  const deleteCountryMutation = useMutation<
    AxiosResponse<IBaseRes<void>>,
    Error,
    string
  >({
    mutationFn: (id) => countriesApi.deleteCountry(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['country'] })
    }
  })

  return deleteCountryMutation
}
