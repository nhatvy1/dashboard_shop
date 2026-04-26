import AxiosBearerClient from "@/shared/axios-config/axios-bearer";
import envConfig from "@/shared/configs/env-config";
import type { IGetCategoriesRes } from "./types/category.response";

class CategoriesService {
  private readonly axiosBearerClient: AxiosBearerClient

  constructor() {
    this.axiosBearerClient = new AxiosBearerClient(
      `${envConfig.api}/categories`
    )
  }

  getCategories() {
    return this.axiosBearerClient.get<IGetCategoriesRes>('/')
  }
}

const catesAPpi = new CategoriesService()
export default catesAPpi