import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { filmsApi, peopleApi } from "./services";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [peopleApi.reducerPath]: peopleApi.reducer,
    [filmsApi.reducerPath]: filmsApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(peopleApi.middleware).concat(filmsApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
