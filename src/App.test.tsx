import { describe, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('Check if <App /> is rendering or not', () => {
  test('Check if the heading is appearing', () => {
    render(<App />);
    const hwHeading = screen.getByRole('heading', { level: 2 });
    expect(hwHeading).toBeInTheDocument();
  });
});
