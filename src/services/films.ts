import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Film } from "../types";
import { ListQueryParams, ListResponse } from "../types";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://swapi.dev/api/" }),
  endpoints: (builder) => ({
    listFilms: builder.query<ListResponse<Film>, ListQueryParams>({
      query: ({ page = 1, search }) => {
        if (search) {
          return `films?page=${page}&search=${search}`;
        } else {
          return `films?page=${page}`;
        }
      },
    }),
  }),
});

export const { useListFilmsQuery } = filmsApi;
