import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { PageNotFound } from './PageNotFound';
import { BrowserRouter as Router } from 'react-router-dom';

describe('PageNotFound', () => {
  it('should have "Page not found" and "Go to the home page" in the document', () => {
    const { getByText } = render(
      <Router>
        <PageNotFound />
      </Router>
    );
    expect(getByText('Page not found')).toBeInTheDocument();
    expect(getByText('Go to the home page')).toBeInTheDocument();
  });
});
