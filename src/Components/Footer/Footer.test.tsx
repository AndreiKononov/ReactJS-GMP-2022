import { render } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('should match Footer snapshot', () => {
    const { asFragment } = render(<Footer>Footer</Footer>);
    expect(asFragment()).toMatchSnapshot();
  });
});
