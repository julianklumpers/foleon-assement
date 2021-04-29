import Axios, { AxiosInstance } from "axios";
import { authStore } from "@src/stores/useAuthStore";
import { QueryOptions } from "@src/@types/services/base";

class BaseService {
  public basePath = "";
  protected axios: AxiosInstance;
  private headers: Record<string, string> = {
    Accept: "application/vnd.becky.v2+json",
  };

  protected defaultQueryParams: QueryOptions = {
    page: 1,
    limit: 5,
    filter: [],
    "order-by": [],
  };

  constructor() {
    this.axios = Axios.create({ headers: this.headers });

    this.setupRequestInterceptor();
  }

  private setupRequestInterceptor = () => {
    this.axios.interceptors.request.use((req) => {
      const { isLoggedIn, access_token } = authStore.getState();
      if (isLoggedIn && access_token) {
        req.headers = {
          ...req.headers,
          Authorization: `Bearer ${access_token}`,
        };
      }

      return req;
    });
  };
}

export default BaseService;
