import { CatchResponseError } from "@/domain/model/api/api";
import { UserAccount } from "@/domain/model/user";
import { setAccount } from "@/infrastructure/store/slice/account";
import { apiDefault } from "../api/apiConfig";

export const accountApi = apiDefault.injectEndpoints({
  endpoints: (builder) => ({
    getAccount: builder.query<UserAccount, void>({
      query: () => ({
        method: "GET",
        url: `api/account`,
      }),
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const user: UserAccount = (await queryFulfilled).data;
          dispatch(setAccount(user));
        } catch (response) {
          const responseError = response as CatchResponseError;
          console.log("Error", responseError.error);
        }
      },
    }),
  }),
});

export const { useGetAccountQuery, useLazyGetAccountQuery } = accountApi;
