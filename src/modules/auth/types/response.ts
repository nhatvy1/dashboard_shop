import type { IBaseRes } from "@/shared/commons/types/response";

export interface ILoginRes extends IBaseRes<{ accessToken: string }> {}
