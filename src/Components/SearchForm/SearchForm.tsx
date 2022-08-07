import { useId } from 'react';
import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { TextField } from '../TextField/TextField';
import styles from './SearchForm.module.scss';
import btnStyles from '../../scss/components/button.module.scss';
import inputStyles from '../../scss/components/form-input.module.scss';

export default function SearchForm() {
  const router = useRouter();
  const { search: searchQuery } = router.query;
  const inputIdPrefix = useId();

  const handleSubmit = ({ searchValue }: { searchValue: string }) => {
    if (searchValue) {
      router.pathname = '/search/[search]';
      router.query.search = searchValue.toLocaleLowerCase();
    } else {
      router.pathname = '/search';
      delete router.query.search;
    }
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <div className={styles.searchFormWrapper}>
      <h1 className={styles.searchFormTitle}>Find your movie</h1>
      <Formik initialValues={{ searchValue: (searchQuery as string) || '' }} onSubmit={handleSubmit}>
        <Form className={styles.searchForm}>
          <TextField
            name="searchValue"
            className={inputStyles.formInput}
            id={`${inputIdPrefix}_search-input`}
            label=""
            type="text"
            placeholder="What do you want to watch?"
          />
          <button className={`${btnStyles.appBtn} ${styles.searchFormBtn}`} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
