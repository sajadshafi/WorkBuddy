import { ReactNode } from 'react';
import { UseFormRegister, RegisterOptions, FieldError } from 'react-hook-form';

export interface BaseProps {
  children?: React.ReactNode;
}

export interface InputProps {
  label: string;
  type: string;
  reg: UseFormRegister<LoginFormValues>;
  registerOptions: RegisterOptions;
  icon?: React.ReactNode;
  classes?: string;
  error?: string;
  name: string;
}

export interface LoginInputProps extends InputProps {
  name: 'email' | 'password';
}

export interface ButtonProps {
  text: string;
  classes?: string;
  clickHandler?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
  type: 'submit' | 'reset';
}

export interface LoginFormValues {
  email: string;
  password: string;
}

export interface RouteValue {
  path: string;
  component: ReactNode;
}
