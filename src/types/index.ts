export interface ListResponse<T> {
  next: string;
  previous: string;
  count: number;
  results: T[];
}

export interface ListQueryParams {
  page: number, 
  search?: string
}

export * from "./people"
export * from "./species"
export * from "./films"
