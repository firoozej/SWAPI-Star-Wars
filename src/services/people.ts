import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { People, ListQueryParams, ListResponse } from "../types";
import { baseUrl } from "./config";

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    listPeople: builder.query<ListResponse<People>, ListQueryParams>({
      query: ({ page = 1, search }) => {
        if (search) {
          return `people?page=${page}&search=${search}`;
        } else {
          return `people?page=${page}`;
        }
      },
    }),
  }),
});

export const { useListPeopleQuery } = peopleApi;
