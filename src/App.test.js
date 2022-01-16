import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Click Me Please! button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Click Me Please!/i);
  expect(buttonElement).toBeInTheDocument();
});
