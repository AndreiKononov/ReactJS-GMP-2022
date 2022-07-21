import { useId } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { TextField } from '../TextField/TextField';

import './SearchForm.scss';

export default function SearchForm() {
  const navigate = useNavigate();
  const { searchQuery } = useParams();
  const [searchParams] = useSearchParams();
  const inputIdPrefix = useId();

  const handleSubmit = ({ searchValue }) => {
    navigate(
      {
        pathname: `/search/${searchValue ?? ''}`,
        search: searchParams.toString(),
      },
      { replace: true }
    );
  };

  return (
    <div className="searchForm-wrapper">
      <h1 className="searchForm-title">Find your movie</h1>
      <Formik initialValues={{ searchValue: searchQuery }} onSubmit={handleSubmit}>
        <Form className="searchForm">
          <TextField
            name="searchValue"
            className="form-input"
            id={`${inputIdPrefix}_search-input`}
            label=""
            type="text"
            placeholder="What do you want to watch?"
          />
          <button className="app-btn searchForm-btn" type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
}
