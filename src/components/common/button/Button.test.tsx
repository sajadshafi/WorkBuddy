import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Button from './Button';

describe('<Input /> rendering', () => {
  test('check in inputbox is rendering', () => {
    render(<Button />);
    const button = screen.getByRole('button', { name: 'Add Task' });
    expect(button).toBeInTheDocument();
  });
});
