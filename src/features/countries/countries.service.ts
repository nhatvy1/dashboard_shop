import AxiosBearerClient from '@/shared/axios-config/axios-bearer'
import envConfig from '@/shared/configs/env-config'
import type {
  ICreateCountryRes,
  IGetCountriesRes,
  IUpdateCountryRes
} from './types/country.response'
import type { ICountry } from './types/country.type'
import type { IBaseRes } from '@/shared/commons/types/response'
import type { AxiosResponse } from 'axios'
import type { ICreateCountryBody, IUpdateCountryBody } from './types/country.body'

class CountriesService {
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api}/countries`
    )
  }

  getCountries(): Promise<AxiosResponse<IGetCountriesRes>> {
    return this.axiosBearerClient.get<IGetCountriesRes>('/')
  }

  createCountry(
    data: ICreateCountryBody
  ): Promise<AxiosResponse<IBaseRes<ICountry>>> {
    return this.axiosBearerClient.post<
      { name: string; slug: string },
      ICreateCountryRes
    >('/', data)
  }

  updateCountry(
    id: string,
    data: IUpdateCountryBody
  ): Promise<AxiosResponse<IBaseRes<ICountry>>> {
    return this.axiosBearerClient.put<IUpdateCountryBody, IUpdateCountryRes>(
      `/${id}`,
      data
    )
  }

  deleteCountry(id: string): Promise<AxiosResponse<IBaseRes<void>>> {
    return this.axiosBearerClient.delete<IBaseRes<void>>(`/${id}`)
  }
}

const countriesApi = new CountriesService()
export default countriesApi
