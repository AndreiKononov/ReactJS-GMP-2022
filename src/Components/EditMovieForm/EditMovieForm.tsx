import { BaseSyntheticEvent, useId, useState } from 'react';
import { genres } from '../../mocks/genres';
import { Movie } from '../../models/Movie';
import { getSelectValuesFromGenres } from '../../utils/getSelectValuesFromGenres';
import { FormField } from '../FormField/FormField';
import { FormSelect } from '../FormSelect/FormSelect';
import './EditMovie.scss';

interface EditMovieProps {
  movie: Movie | null;
  onSubmit: (formValue: Partial<Movie>) => void;
}

function setInitialFormValue(movie: Movie | null): Partial<Movie> {
  return {
  title: movie?.title || '',
  release_date: movie?.release_date || '',
  poster_path: movie?.poster_path || '',
  vote_average: movie?.vote_average,
  runtime: movie?.runtime,
  overview: movie?.overview || '',
  genres: movie?.genres || [],
  };
}

const genreSelectOptions = getSelectValuesFromGenres(genres);

export const EditMovieForm = ({ movie, onSubmit }: EditMovieProps) => {
  const [formValue, setFormValue] = useState<Partial<Movie>>(setInitialFormValue(movie));

  function onChange(event: BaseSyntheticEvent): void {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  function handleGenreChange(selectedValues): void {
    setFormValue({
      ...formValue,
      genres: selectedValues.map(({ value }) => value),
    });
  }

  function resetForm(): void {
    setFormValue(setInitialFormValue(movie));
  }

  function onFormSubmit(event: BaseSyntheticEvent): void {
    event.preventDefault();
    onSubmit(formValue);
  }

  function getIdFor(fieldName: string): string {
    return `${inputIdPrefix}_${fieldName}`;
  }

  const inputIdPrefix = useId();

  return (
    <form className="edit-movie-form" onSubmit={onFormSubmit}>
      <div className="form-fields">
        <FormField labelTitle="Title: " id={getIdFor('title')}>
          <input
            id={getIdFor('title')}
            type="text"
            name="title"
            className="form-input"
            placeholder="Title"
            value={formValue.title}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Release date:" id={getIdFor('release_date')}>
          <input
            id={getIdFor('release_date')}
            type="date"
            name="release_date"
            className="form-input"
            placeholder="Select Date"
            value={formValue.release_date}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Poster Url:" id={getIdFor('poster_path')}>
          <input
            id={getIdFor('poster_path')}
            type="url"
            name="poster_path"
            className="form-input"
            placeholder="https://"
            value={formValue.poster_path}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Rating:" id={getIdFor('vote_average')}>
          <input
            id={getIdFor('vote_average')}
            type="number"
            name="vote_average"
            className="form-input"
            placeholder="7.8"
            value={formValue.vote_average}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Genre:" id={getIdFor('genres')}>
          <FormSelect
            inputId={getIdFor('genres')}
            value={getSelectValuesFromGenres(formValue.genres as string[])}
            isMulti
            options={genreSelectOptions}
            onChange={handleGenreChange}
          />
        </FormField>

        <FormField labelTitle="Runtime:" id={getIdFor('runtime')}>
          <input
            id={getIdFor('runtime')}
            type="number"
            name="runtime"
            className="form-input"
            placeholder="minutes"
            value={formValue.runtime}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Overview:" id={getIdFor('overview')}>
          <textarea
            id={getIdFor('overview')}
            name="overview"
            className="form-textarea"
            placeholder="Movie description"
            value={formValue.overview}
            onChange={onChange}
          />
        </FormField>
      </div>

      <div className="edit-movie-form-actions">
        <button className="app-btn app-btn-reverse" type="button" onClick={resetForm}>
          Reset
        </button>
        <button className="app-btn" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
