import type { IBaseRes } from '@/shared/commons/types/response'
import type { ICategory } from './category.type'

export interface IGetCatesRes extends IBaseRes<{
  data: ICategory[]
  total: number
  page: number
  limit: number
  totalPages: number
}> {}
export interface ICreateCatesRes extends IBaseRes<ICategory> {}
export interface IUpdateCatesRes extends IBaseRes<ICategory> {}
