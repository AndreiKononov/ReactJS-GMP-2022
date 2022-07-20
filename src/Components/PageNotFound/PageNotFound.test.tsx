import { render } from '@testing-library/react';
import { PageNotFound } from './PageNotFound';
import { BrowserRouter as Router } from 'react-router-dom';

describe('PageNotFound', () => {
  it('should match PageNotFound snapshot', () => {
    const { asFragment } = render(
      <Router>
        <PageNotFound />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
