import {
  useQuery,
  type QueryKey,
  type UseQueryOptions
} from '@tanstack/react-query'
import type { IGetCountriesRes } from '../types/country.response'
import type { AxiosResponse } from 'axios'
import countriesApi from '../countries.service'

type Options = Omit<
  UseQueryOptions<
    AxiosResponse<IGetCountriesRes>,
    Error,
    AxiosResponse<IGetCountriesRes>,
    QueryKey
  >,
  'queryKey' | 'queryFn'
>

export default function useGetCountryQuery(options?: Options) {
  return useQuery({
    queryKey: ['country'],
    queryFn: () => countriesApi.getCountries(),
    ...options
  })
}
