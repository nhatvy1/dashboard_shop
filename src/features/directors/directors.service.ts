import AxiosBearerClient from '@/shared/axios-config/axios-bearer'
import envConfig from '@/shared/configs/env-config'
import type {
  ICreateDirectorRes,
  IGetDirectorsRes,
  IUpdateDirectorRes
} from './types/director.response'
import type { IDirector } from './types/director.type'
import type { IBaseRes } from '@/shared/commons/types/response'
import type { AxiosResponse } from 'axios'
import type { ICreateDirectorBody, IUpdateDirectorBody } from './types/director.body'

class DirectorsService {
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api}/directors`
    )
  }

  getDirectors(): Promise<AxiosResponse<IGetDirectorsRes>> {
    return this.axiosBearerClient.get<IGetDirectorsRes>('/paginated')
  }

  createDirector(
    data: ICreateDirectorBody
  ): Promise<AxiosResponse<IBaseRes<IDirector>>> {
    return this.axiosBearerClient.post<
      { name: string; slug: string },
      ICreateDirectorRes
    >('/', data)
  }

  updateDirector(
    id: string,
    data: IUpdateDirectorBody
  ): Promise<AxiosResponse<IBaseRes<IDirector>>> {
    return this.axiosBearerClient.put<IUpdateDirectorBody, IUpdateDirectorRes>(
      `/${id}`,
      data
    )
  }

  deleteDirector(id: string): Promise<AxiosResponse<IBaseRes<void>>> {
    return this.axiosBearerClient.delete<IBaseRes<void>>(`/${id}`)
  }
}

const directorsApi = new DirectorsService()
export default directorsApi
