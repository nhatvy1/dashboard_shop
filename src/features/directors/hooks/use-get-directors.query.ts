import {
  useQuery,
  type QueryKey,
  type UseQueryOptions
} from '@tanstack/react-query'
import type { IGetDirectorsRes } from '../types/director.response'
import type { AxiosResponse } from 'axios'
import directorsApi from '../directors.service'

type Options = Omit<
  UseQueryOptions<
    AxiosResponse<IGetDirectorsRes>,
    Error,
    AxiosResponse<IGetDirectorsRes>,
    QueryKey
  >,
  'queryKey' | 'queryFn'
>

export default function useGetDirectorQuery(options?: Options) {
  return useQuery({
    queryKey: ['director'],
    queryFn: () => directorsApi.getDirectors(),
    ...options
  })
}
