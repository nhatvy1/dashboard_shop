export interface IBaseRes<T> {
  message: string
  statusCode: number
  data: T
}
