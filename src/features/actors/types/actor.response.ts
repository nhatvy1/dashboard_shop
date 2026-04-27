import type { IBaseRes } from '@/shared/commons/types/response'
import type { IActor } from './actor.type'

export interface IGetActorsRes extends IBaseRes<IActor[]> {}
export interface ICreateActorRes extends IBaseRes<IActor> {}
export interface IUpdateActorRes extends IBaseRes<IActor> {}
