export interface QueryParams {
  sortBy: string | null;
  sortOrder: 'asc' | 'desc';
  search: string | null;
  searchBy: 'title' | 'genre';
  filter: string | null;
}
