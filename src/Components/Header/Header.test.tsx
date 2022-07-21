import { render } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('should match Header snapshot', () => {
    const { asFragment } = render(<Header>Header</Header>);
    expect(asFragment()).toMatchSnapshot();
  });
});
