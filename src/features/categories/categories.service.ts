import AxiosBearerClient from '@/shared/axios-config/axios-bearer'
import envConfig from '@/shared/configs/env-config'
import type {
  ICreateCatesRes,
  IGetCatesRes,
  IUpdateCatesRes
} from './types/category.response'
import type { ICategory } from './types/category.type'
import type { IBaseRes } from '@/shared/commons/types/response'
import type { AxiosResponse } from 'axios'
import type { ICreateCatesBody, IUpdateCatesBody } from './types/category.body'
import type { ICategoryParams } from './types/category.params'
import queryString from 'query-string'

class CategoriesService {
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api}/categories`
    )
  }

  getCategories(params: ICategoryParams): Promise<AxiosResponse<IGetCatesRes>> {
    const strParams = queryString.stringify(params)
    return this.axiosBearerClient.get<IGetCatesRes>(`/paginated?${strParams}`)
  }

  createCategory(
    data: ICreateCatesBody
  ): Promise<AxiosResponse<IBaseRes<ICategory>>> {
    return this.axiosBearerClient.post<
      { name: string; slug: string },
      ICreateCatesRes
    >('/', data)
  }

  updateCategory(
    id: string,
    data: IUpdateCatesBody
  ): Promise<AxiosResponse<IBaseRes<ICategory>>> {
    return this.axiosBearerClient.put<IUpdateCatesBody, IUpdateCatesRes>(
      `/${id}`,
      data
    )
  }

  deleteCategory(id: string): Promise<AxiosResponse<IBaseRes<void>>> {
    return this.axiosBearerClient.delete<IBaseRes<void>>(`/${id}`)
  }
}

const catesAPpi = new CategoriesService()
export default catesAPpi
