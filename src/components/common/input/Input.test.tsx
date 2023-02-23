import { screen, render } from '@testing-library/react';
import { describe, test } from 'vitest';
import Input from './Input';

describe('<Input /> rendering', () => {
  test('check if inputbox is rendering', () => {
    render(
      <Input
        label="any"
        name="any"
        // register=
        // icon=an
        classes=""
      />
    );
    const inputbox = screen.getByRole('textbox');
    expect(inputbox).toBeInTheDocument();
  });
});
