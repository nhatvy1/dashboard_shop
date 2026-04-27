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

class CategoriesService {
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api}/categories`
    )
  }

  getCategories(): Promise<AxiosResponse<IGetCatesRes>> {
    return this.axiosBearerClient.get<IGetCatesRes>('/')
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
