import AxiosBearerClient from '@/shared/axios-config/axios-bearer'
import envConfig from '@/shared/configs/env-config'
import type {
  ICreateActorRes,
  IGetActorsRes,
  IUpdateActorRes
} from './types/actor.response'
import type { IActor } from './types/actor.type'
import type { IBaseRes } from '@/shared/commons/types/response'
import type { AxiosResponse } from 'axios'
import type { ICreateActorBody, IUpdateActorBody } from './types/actor.body'

class ActorsService {
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api}/actors`
    )
  }

  getActors(): Promise<AxiosResponse<IGetActorsRes>> {
    return this.axiosBearerClient.get<IGetActorsRes>('/')
  }

  createActor(
    data: ICreateActorBody
  ): Promise<AxiosResponse<IBaseRes<IActor>>> {
    return this.axiosBearerClient.post<
      { name: string; slug: string },
      ICreateActorRes
    >('/', data)
  }

  updateActor(
    id: string,
    data: IUpdateActorBody
  ): Promise<AxiosResponse<IBaseRes<IActor>>> {
    return this.axiosBearerClient.put<IUpdateActorBody, IUpdateActorRes>(
      `/${id}`,
      data
    )
  }

  deleteActor(id: string): Promise<AxiosResponse<IBaseRes<void>>> {
    return this.axiosBearerClient.delete<IBaseRes<void>>(`/${id}`)
  }
}

const actorsApi = new ActorsService()
export default actorsApi
