import { useMemo } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { QueryParams } from '../models/QueryParams';
import { initialQueryParams } from '../utils/initialQueryParams';

export const useQueryParams = (): QueryParams => {
  const { searchQuery } = useParams();
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get('sortBy') ?? null;
  const filter = searchParams.get('genre') ?? null;
  const search = searchQuery ?? null;

  return useMemo(
    () => ({
      ...initialQueryParams,
      search,
      sortBy,
      filter,
    }),
    [search, sortBy, filter]
  );
};
