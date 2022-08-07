import styles from './MoviesFound.module.scss';

interface MoviesFoundProps {
  numberOfMovies: number;
}

export function MoviesFound({ numberOfMovies }: MoviesFoundProps) {
  return (
    <div className={styles.moviesFound}>
      <span className={styles.moviesFoundValue}>{numberOfMovies}</span> movies found
    </div>
  );
}
