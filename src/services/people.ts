import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { People } from "../types/people";
import { ListQueryParams, ListResponse } from "../types";

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    getByName: builder.query<People, string>({
      query: (name) => `people/${name}`,
    }),
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

export const { useGetByNameQuery, useListPeopleQuery } = peopleApi;
