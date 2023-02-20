import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Input from './Input';

describe('<Input /> rendering', () => {
  test('check if inputbox is rendering', () => {
    render(<Input />);
    const inputbox = screen.getByRole('textbox', { name: 'Task' });
    expect(inputbox).toBeInTheDocument();
  });
});
