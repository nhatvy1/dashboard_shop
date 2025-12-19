import type { InternalAxiosRequestConfig } from "axios"
import AxiosClient from "./axios-client"

class AxiosBearerClient extends AxiosClient {
  private accessToken: string | null = null
  private acceptLanguage: string | null = null

  constructor(baseURL: string) {
    super(baseURL)
    this.accessToken = ''

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // this.accessToken = authStore.getState().accessToken

        if (this.accessToken) {
          config.headers['Authorization'] = `Bearer ${this.accessToken}`
        }

        this.acceptLanguage = localStorage.getItem('i18nextLng') || 'vi'
        config.headers['Accept-Language'] = this.acceptLanguage

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {

        return response
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}

export default AxiosBearerClient
