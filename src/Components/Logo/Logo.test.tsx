import { render } from '@testing-library/react';
import { Logo } from './Logo';

describe('Logo', () => {
  it('should match Logo snapshot', () => {
    const { asFragment } = render(<Logo />);
    expect(asFragment()).toMatchSnapshot();
  });
});
