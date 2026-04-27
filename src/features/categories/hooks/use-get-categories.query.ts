import {
  useQuery,
  type QueryKey,
  type UseQueryOptions
} from '@tanstack/react-query'
import type { IGetCatesRes } from '../types/category.response'
import type { AxiosResponse } from 'axios'
import catesAPpi from '../categories.service'

type Options = Omit<
  UseQueryOptions<
    AxiosResponse<IGetCatesRes>,
    Error,
    AxiosResponse<IGetCatesRes>,
    QueryKey
  >,
  'queryKey' | 'queryFn'
>

export default function useGetCategoryQuery(options?: Options) {
  return useQuery({
    queryKey: ['category'],
    queryFn: () => catesAPpi.getCategories(),
    ...options
  })
}
