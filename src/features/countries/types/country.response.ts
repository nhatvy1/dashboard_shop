import type { IBaseRes } from '@/shared/commons/types/response'
import type { ICountry } from './country.type'

export interface IGetCountriesRes extends IBaseRes<ICountry[]> {}
export interface ICreateCountryRes extends IBaseRes<ICountry> {}
export interface IUpdateCountryRes extends IBaseRes<ICountry> {}
