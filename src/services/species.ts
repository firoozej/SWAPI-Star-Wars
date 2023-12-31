import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Species, ListQueryParams, ListResponse } from "../types";
import { baseUrl } from "./config";

export const speciesApi = createApi({
  reducerPath: "speciesApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    listspecies: builder.query<ListResponse<Species>, ListQueryParams>({
      query: ({ page = 1, search }) => {
        if (search) {
          return `species?page=${page}&search=${search}`;
        } else {
          return `species?page=${page}`;
        }
      },
    }),
  }),
});

export const { useListspeciesQuery } = speciesApi;
