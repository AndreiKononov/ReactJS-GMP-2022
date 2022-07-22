import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { App } from './App';

jest.mock('./containers/HeroContainer/HeroContainer', () => {
  return () => <div>Mocked Hero Container</div>;
});

jest.mock('./components/Main/Main', () => {
  return () => <div>Mocked Main</div>;
});

jest.mock('./components/Footer/Footer', () => {
  return () => <div>Mocked Footer</div>;
});

describe('App', () => {
  it('should render Hero Container, Main and Footer sections', () => {
    const { getByText } = render(<App />);

    expect(getByText('Mocked Hero Container')).toBeInTheDocument();
    expect(getByText('Mocked Main')).toBeInTheDocument();
    expect(getByText('Mocked Footer')).toBeInTheDocument();
  });
});
