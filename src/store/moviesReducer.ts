import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialQueryParams } from './initialQueryParams';
import { Movie } from '../models/Movie';
import { QueryParams } from '../models/QueryParams';
import { fetchMoviesFromServer } from './fetchMoviesFromServer';

interface FetchedMoviesState {
  fetchedMovies: Movie[];
  isLoading: boolean;
  isError: boolean;
  queryParams: QueryParams;
  selectedMovie: Movie | null;
}

const initialState: FetchedMoviesState = {
  fetchedMovies: [],
  isLoading: false,
  isError: false,
  queryParams: initialQueryParams,
  selectedMovie: null,
};

export const fetchMovies = createAsyncThunk('toolkit/moviesReducer/fetchMovies', fetchMoviesFromServer);

const moviesSlice = createSlice({
  name: 'tookit/moviesReducer',
  initialState: initialState,
  reducers: {
    setSortBy: (state: FetchedMoviesState, action: PayloadAction<string>) => {
      state.queryParams = {
        ...state.queryParams,
        sortBy: action.payload,
      };
    },
    setFilter: (state: FetchedMoviesState, action: PayloadAction<string>) => {
      state.queryParams = {
        ...state.queryParams,
        filter: action.payload,
      };
    },
    setSearch: (state: FetchedMoviesState, action: PayloadAction<string>) => {
      state.queryParams = {
        ...state.queryParams,
        search: action.payload,
      };
    },
    setSelectedMovie: (state: FetchedMoviesState, action: PayloadAction<Movie | null>) => {
      state.selectedMovie = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state: FetchedMoviesState) => {
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state: FetchedMoviesState, action: PayloadAction<Movie[]>) => {
      state.fetchedMovies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMovies.rejected, (state: FetchedMoviesState) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { setSortBy, setFilter, setSearch, setSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
