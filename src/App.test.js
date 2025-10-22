import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Docker Demo text', () => {
  render(<App />);
  const linkElement = screen.getByText(/React \+ Docker Demo/i);
  expect(linkElement).toBeInTheDocument();
});
