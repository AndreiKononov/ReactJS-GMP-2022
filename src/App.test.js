import { render, screen } from '@testing-library/react';
import App from './Components/App';

test('renders counter', () => {
  render(<App />);
  const linkElement = screen.getByText(/counter/i);
  expect(linkElement).toBeInTheDocument();
});
