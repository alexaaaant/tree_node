import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders assignment heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/tree-selector/i);
  expect(headingElement).toBeInTheDocument();
});
