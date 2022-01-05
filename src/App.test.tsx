import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders  basic flash card', () => {
  render(<App />);
  const flashCard = screen.findByTestId("flash-card-basic");
  expect(flashCard).toBeInTheDocument();
});
