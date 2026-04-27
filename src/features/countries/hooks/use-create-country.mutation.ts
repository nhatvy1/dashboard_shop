import { useMutation } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { ICreateCountryRes } from '../types/country.response'
import countriesApi from '../countries.service'

export default function useCreateCountryMutation() {
  const queryClient = useQueryClient()

  const createCountryMutation = useMutation<
    AxiosResponse<ICreateCountryRes>,
    Error,
    { name: string; slug: string }
  >({
    mutationFn: (data) => countriesApi.createCountry(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['country'] })
    }
  })

  return createCountryMutation
}
