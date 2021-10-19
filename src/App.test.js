import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const paragraph = screen.getByText(/Homekit log/i);
  expect(paragraph).toBeInTheDocument();
});
