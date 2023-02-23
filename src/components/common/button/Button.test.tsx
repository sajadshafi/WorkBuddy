import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Button from './Button';

describe('<Input /> rendering', () => {
  test('check in inputbox is rendering', () => {
    render(<Button text="Sign In" />);
    const button = screen.getByRole('button', { name: /sign in/i });
    expect(button).toBeInTheDocument();
  });
});
