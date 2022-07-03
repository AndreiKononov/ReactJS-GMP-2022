import './FilterPanel.scss';
import { GenreToggleButton } from '../GenreToggleButton/GenreToggleButton';
import { Genre } from '../../models/Genre';

interface GenreToggleProps {
  genres: Genre[];
  selectedGenre: string;
  handleSelect: (value: Genre) => void;
}

export function GenreTogglePanel({genres, selectedGenre, handleSelect}: GenreToggleProps) {
  return (
    <div className="genre-panel">
      {genres.map((genre: Genre) => {
        return (
          <GenreToggleButton
            key={genre.value}
            isSelected={genre.value === selectedGenre}
            genreTitle={genre.label}
            handleSelect={() => handleSelect(genre)}
          />
        );
      })}
    </div>
  );
}
