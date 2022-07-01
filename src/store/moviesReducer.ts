import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialQueryParams } from '../utils/initialQueryParams';
import { Movie } from '../models/Movie';
import { QueryParams } from '../models/QueryParams';
import { MoviesApiService } from './moviesApiService';

interface FetchedMoviesState {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
  queryParams: QueryParams;
  selectedMovie: Movie | null;
}

const initialState: FetchedMoviesState = {
  movies: [],
  isLoading: false,
  isError: false,
  queryParams: initialQueryParams,
  selectedMovie: null,
};

export const fetchMovies = createAsyncThunk('toolkit/moviesReducer/fetchMovies', MoviesApiService.fetchMovies);
export const deleteMovieById = createAsyncThunk('toolkit/moviesReducer/deleteMovie', MoviesApiService.deleteMovieById);
export const createMovie = createAsyncThunk('toolkit/moviesReducer/createMovie', MoviesApiService.createMovie);
export const editMovie = createAsyncThunk('toolkit/moviesReducer/editMovie', MoviesApiService.editMovie);

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
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state: FetchedMoviesState, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchMovies.rejected, (state: FetchedMoviesState) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(deleteMovieById.fulfilled, (state: FetchedMoviesState) => ({
      ...state,
    }));
  },
});

export const { setSortBy, setFilter, setSearch, setSelectedMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
