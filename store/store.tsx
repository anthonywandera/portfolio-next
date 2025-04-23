import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Import slice reducers
import { authReducer } from "./auth";
import { apiSlice } from "./api";
import { projectsApiSlice } from "./projects";

const store = configureStore({
  reducer: {
    admin: authReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [projectsApiSlice.reducerPath]: projectsApiSlice.reducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(projectsApiSlice.middleware);
  },
});

export default function StoreProvider(props: { children: React.ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>;
}
