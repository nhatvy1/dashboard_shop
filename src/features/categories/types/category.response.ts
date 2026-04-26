import type { IBaseRes } from '@/shared/commons/types/response'
import type { ICategory } from './category.type'

export interface IGetCategoriesRes extends IBaseRes<ICategory[]> {}
