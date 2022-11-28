import { render, screen } from '@testing-library/react';
import App from './App';

test('check weather app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
