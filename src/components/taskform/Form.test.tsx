import { describe, test } from 'vitest';
import { screen, render } from '@testing-library/react';
import Form from './Form';

describe('Check if <Form /> is rendering or not', () => {
  test('Check if the heading is appearing', () => {
    render(<Form />);
    const hwHeading = screen.getByRole('heading', { level: 2 });
    expect(hwHeading).toBeInTheDocument();
  });

  test('Check if the heading has text Add New Task', () => {
    render(<Form />);
    const hwHeading = screen.getByRole('heading', { level: 2 });
    expect(hwHeading).toBeInTheDocument();
    expect(hwHeading).toHaveTextContent(/Add New Task/i);
  });
});
