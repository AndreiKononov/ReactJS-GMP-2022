import './FilterPanel.scss';
import { GenreToggleButton } from '../GenreToggleButton/GenreToggleButton';

interface GenreToggleProps {
  genres: string[];
  selectedGenre: string;
  handleSelect: (value: string) => void;
}

export function GenreTogglePanel({genres, selectedGenre, handleSelect}: GenreToggleProps) {
  return (
    <div className="genre-panel">
      {genres.map((genre: string) => {
        return (
          <GenreToggleButton
            key={genre}
            isSelected={genre === selectedGenre}
            genreTitle={genre}
            handleSelect={() => handleSelect(genre)}
          />
        );
      })}
    </div>
  );
}
