import { QueryOptions } from "@src/@types/services/base";
import PublicationsService from "@src/services/PublicationsService";
import { useQuery } from "react-query";

export const usePublications = (params: QueryOptions = {}) => {
  return useQuery(
    ["publications", { ...params }],
    PublicationsService.getPublicationCollection
  );
};
