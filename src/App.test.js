import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument(); // Passes if "learn react" is present
});

test('intentional failure test', () => {
  render(<App />);
  const nonexistentElement = screen.getByText(/this text does not exist/i);
  expect(nonexistentElement).toBeInTheDocument(); // This will fail
});
