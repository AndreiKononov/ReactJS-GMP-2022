import { render } from '@testing-library/react';
import Main from './Main';

describe('Main', () => {
  it('should match Main snapshot', () => {
    const { asFragment } = render(<Main>Main</Main>);
    expect(asFragment()).toMatchSnapshot();
  });
});
