export interface QueryParams {
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  search: string;
  searchBy: 'title' | 'genre';
  filter: string;
  limit: number;
}
