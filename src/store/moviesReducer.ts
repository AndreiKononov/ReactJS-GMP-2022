import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../models/Movie';
import { MoviesApiService } from './moviesApiService';

interface FetchedMoviesState {
  movies: Movie[];
  isLoading: boolean;
  isError: boolean;
}

const initialState: FetchedMoviesState = {
  movies: [],
  isLoading: false,
  isError: false,
};

export const fetchMovies = createAsyncThunk('toolkit/moviesReducer/fetchMovies', MoviesApiService.fetchMovies);
export const deleteMovieById = createAsyncThunk('toolkit/moviesReducer/deleteMovie', MoviesApiService.deleteMovieById);
export const createMovie = createAsyncThunk('toolkit/moviesReducer/createMovie', MoviesApiService.createMovie);
export const editMovie = createAsyncThunk('toolkit/moviesReducer/editMovie', MoviesApiService.editMovie);
export const fetchMovieById = createAsyncThunk('toolkit/moviesReducer/fetchMovie', MoviesApiService.fetchMovieById);

const moviesSlice = createSlice({
  name: 'tookit/moviesReducer',
  initialState: initialState,
  reducers: {},
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
  },
});

export default moviesSlice.reducer;
