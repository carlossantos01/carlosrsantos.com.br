import { apiDefault } from "@/data/api/apiConfig";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import account from "./slice/account";
import authentication from "./slice/authentication";

export const reducer = combineReducers({
  [apiDefault.reducerPath]: apiDefault.reducer,
  authentication,
  account,
});

export const makeStore = () => {
  return configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiDefault.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
