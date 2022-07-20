import { render } from '@testing-library/react';
import { SearchForm } from './SearchForm';
import { BrowserRouter as Router } from 'react-router-dom';

describe('SearchForm', () => {
  it('should match SearchForm snapshot', () => {
    const { asFragment } = render(
      <Router>
        <SearchForm />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
