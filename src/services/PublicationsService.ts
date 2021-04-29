import Qs from "qs";
import BaseService from "./BaseService";
import { QueryFunctionContext } from "react-query";
import { QueryOptions } from "@src/@types/services/base";

class PublicationsService extends BaseService {
  basePath = "/api/v2/magazine/edition";

  getPublicationCollection = async ({
    queryKey: [_key, args],
  }: QueryFunctionContext<[string, QueryOptions]>): Promise<any> => {
    const params = {
      ...this.defaultQueryParams,
      ...args,
    };

    const res = await this.axios.get<any>(this.basePath, {
      params,
      paramsSerializer: (params: QueryOptions) => Qs.stringify(params),
    });

    return res.data;
  };
}

export default new PublicationsService();
