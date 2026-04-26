import {
  useQuery,
  type QueryKey,
  type UseQueryOptions
} from '@tanstack/react-query'
import type { IGetCategoriesRes } from '../types/category.response'
import type { AxiosResponse } from 'axios'
import catesAPpi from '../categories.service'

type Options = Omit<
  UseQueryOptions<
    AxiosResponse<IGetCategoriesRes>,
    Error,
    IGetCategoriesRes,
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
