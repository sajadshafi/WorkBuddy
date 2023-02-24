import { screen, render } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { describe, test } from 'vitest';
import { LoginFormValues } from '../../../interfaces/interfaces';
import schema from '../../../utils/schema';
import Input from './Input';

const RenderInput = () => {
  const { register } = useForm<LoginFormValues>();
  return (
    <Input
      label="Email"
      name="email"
      reg={register}
      registerOptions={schema.email}
    />
  );
};

describe('<Input /> rendering', () => {
  test('check if inputbox is rendering', () => {
    render(<RenderInput />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
