import { GenreToggleButton } from '../GenreToggleButton/GenreToggleButton';
import { Genre } from '../../models/Genre';
import styles from './FilterPanel.module.scss';

interface GenreToggleProps {
  genres: Genre[];
  selectedGenre: string | null;
  handleSelect: (value: Genre) => void;
}

export function GenreTogglePanel({genres, selectedGenre, handleSelect}: GenreToggleProps) {
  const isGenreSelected = (genre: Genre): boolean => {
    if (!selectedGenre) {
      return genre.value === '';
    }

    return genre.value === selectedGenre;
  };

  return (
    <div className={styles.genrePanel}>
      {genres.map((genre: Genre) => {
        return (
          <GenreToggleButton
            key={genre.value}
            isSelected={isGenreSelected(genre)}
            genreTitle={genre.label}
            handleSelect={() => handleSelect(genre)}
          />
        );
      })}
    </div>
  );
}
