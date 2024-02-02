import { AuthorizationHeader } from "@/domain/enums/api/apiType";
import { ApiParams } from "@/domain/model/api/api";
import appConfig from "@/infrastructure/config/appConfig";
import {
  BaseQueryApi,
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import { handleApiResponse, prepareHeadersWithAuth } from "./apiUtils";
const createNewApi = ({
  baseUrl = appConfig.apiUrl,
  apiName,
  authorizationHeader = AuthorizationHeader.BEARER,
}: ApiParams) => {
  const baseQuery = fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) =>
      prepareHeadersWithAuth(headers, authorizationHeader),
  });

  const baseQueryWithStatusTreatment: BaseQueryFn = async (
    args: string | FetchArgs,
    api: BaseQueryApi,
    extraOptions = {}
  ) => handleApiResponse(baseQuery, args, api, extraOptions);

  return createApi({
    baseQuery: baseQueryWithStatusTreatment,
    endpoints: () => ({}),
    reducerPath: apiName,
  });
};

export const apiDefault = createNewApi({ apiName: "apiDefault" });
