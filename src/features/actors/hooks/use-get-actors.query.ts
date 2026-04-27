import {
  useQuery,
  type QueryKey,
  type UseQueryOptions
} from '@tanstack/react-query'
import type { IGetActorsRes } from '../types/actor.response'
import type { AxiosResponse } from 'axios'
import actorsApi from '../actors.service'

type Options = Omit<
  UseQueryOptions<
    AxiosResponse<IGetActorsRes>,
    Error,
    AxiosResponse<IGetActorsRes>,
    QueryKey
  >,
  'queryKey' | 'queryFn'
>

export default function useGetActorQuery(options?: Options) {
  return useQuery({
    queryKey: ['actor'],
    queryFn: () => actorsApi.getActors(),
    ...options
  })
}
