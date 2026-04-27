import type { IBaseRes } from '@/shared/commons/types/response'
import type { IDirector } from './director.type'

export interface IGetDirectorsRes extends IBaseRes<{
  data: IDirector[]
  total: number
  page: number
  limit: number
}> {}
export interface ICreateDirectorRes extends IBaseRes<IDirector> {}
export interface IUpdateDirectorRes extends IBaseRes<IDirector> {}
