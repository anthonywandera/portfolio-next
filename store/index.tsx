import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Import slice reducers
import { authReducer } from "./auth";
import { apiSlice } from "./api";

const store = configureStore({
  reducer: {
    admin: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
