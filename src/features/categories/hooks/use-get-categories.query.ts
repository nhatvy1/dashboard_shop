import {
  useQuery,
  type QueryKey,
  type UseQueryOptions
} from '@tanstack/react-query'
import type { IGetCatesRes } from '../types/category.response'
import type { AxiosResponse } from 'axios'
import catesAPpi from '../categories.service'
import type { ICategoryParams } from '../types/category.params'

type Options = Omit<
  UseQueryOptions<
    AxiosResponse<IGetCatesRes>,
    Error,
    AxiosResponse<IGetCatesRes>,
    QueryKey
  >,
  'queryKey' | 'queryFn'
>
export default function useGetCategoryQuery(params: ICategoryParams, options?: Options) {
  return useQuery({
    queryKey: ['category', params.page, params.limit],
    queryFn: () => catesAPpi.getCategories(params),
    ...options
  })
}
