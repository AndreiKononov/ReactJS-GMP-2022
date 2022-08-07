import Link from 'next/link';
import styles from '../src/components/PageNotFound/PageNotFound.module.scss'

const PageNotFound = () => (
  <div className={styles.pageNotFound}>
    <h1 className={styles.title}>Page not found</h1>
    <p>
      <Link href="/">
        <a className={styles.link}>Go to the home page</a>
      </Link>
    </p>
  </div>
);

export default PageNotFound;
