export interface IBaseRes<T> {
  message: string
  statusCode: number
  data: T
}

export interface IBasePagination {
  total: number;
  page: number
  limit: number
}
