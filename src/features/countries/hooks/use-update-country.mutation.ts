import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { IUpdateCountryRes } from '../types/country.response'
import countriesApi from '../countries.service'

export default function useUpdateCountryMutation() {
  const queryClient = useQueryClient()

  const updateCountryMutation = useMutation<
    AxiosResponse<IUpdateCountryRes>,
    Error,
    { id: string; name?: string; slug?: string }
  >({
    mutationFn: ({ id, ...data }) => countriesApi.updateCountry(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['country'] })
    }
  })

  return updateCountryMutation
}
