import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ListQueryParams, ListResponse, Film } from "../types";
import { baseUrl } from "./config";

export const filmsApi = createApi({
  reducerPath: "filmsApi",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
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
