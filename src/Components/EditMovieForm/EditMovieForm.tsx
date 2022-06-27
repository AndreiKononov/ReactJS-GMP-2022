import { BaseSyntheticEvent, useId, useState } from 'react';
import { genres } from '../../containers/MoviesListOptionsContainer/genres';
import { EditMovieFormValue } from '../../models/EditMovieFormValue';
import { Genre } from '../../models/Genre';
import { Movie } from '../../models/Movie';
import { FormField } from '../FormField/FormField';
import { FormSelect } from '../FormSelect/FormSelect';
import './EditMovie.scss';

interface EditMovieProps {
  movie: Movie | null;
  onSubmit: (formValue: EditMovieFormValue) => void;
}

function setInitialFormValue(movie: Movie | null): EditMovieFormValue {
  return {
  title: movie?.title || '',
  release_date: movie?.release_date || '',
  poster_path: movie?.poster_path || '',
  vote_average: movie?.vote_average || 0,
  runtime: movie?.runtime || 0,
  overview: movie?.overview || '',
  genres: movie?.genres.map((value: string): Genre => ({ value, label: value })) || [],
  };
}

const genreSelectOptions = genres;

export const EditMovieForm = ({ movie, onSubmit }: EditMovieProps) => {
  const [formValue, setFormValue] = useState<EditMovieFormValue>(setInitialFormValue(movie));

  function onChange(event: BaseSyntheticEvent): void {
    setFormValue({
      ...formValue,
      [event.target.name]: event.target.value,
    });
  }

  function handleGenreChange(selectedValues): void {
    setFormValue({
      ...formValue,
      genres: selectedValues,
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
        <FormField labelTitle="Title:">
          <input
            type="text"
            name="title"
            className="form-input"
            placeholder="Title"
            value={formValue.title}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Release date:">
          <input
            type="date"
            name="release_date"
            className="form-input"
            placeholder="Select Date"
            value={formValue.release_date}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Poster Url:">
          <input
            type="url"
            name="poster_path"
            className="form-input"
            placeholder="https://"
            value={formValue.poster_path}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Rating:">
          <input
            type="number"
            name="vote_average"
            className="form-input"
            placeholder="7.8"
            value={formValue.vote_average}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Genre:">
          <FormSelect
            inputId={getIdFor('genres')}
            value={formValue.genres}
            isMulti
            options={genreSelectOptions}
            onChange={handleGenreChange}
          />
        </FormField>

        <FormField labelTitle="Runtime:">
          <input
            type="number"
            name="runtime"
            className="form-input"
            placeholder="minutes"
            value={formValue.runtime}
            onChange={onChange}
          />
        </FormField>

        <FormField labelTitle="Overview:">
          <textarea
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
