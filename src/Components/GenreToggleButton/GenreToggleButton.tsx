import styles from './GenreToggleButton.module.scss';

interface GenreButtonProps {
  genreTitle: string;
  isSelected: boolean;
  handleSelect: () => void;
}

export function GenreToggleButton({ isSelected, handleSelect, genreTitle }: GenreButtonProps) {
  return (
    <button className={`${styles.genreButton} ${isSelected ? styles.selected : ''}`} onClick={handleSelect}>
      {genreTitle}
    </button>
  );
}
