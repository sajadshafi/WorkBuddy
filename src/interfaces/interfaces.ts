import { User } from 'firebase/auth';
import { ReactNode } from 'react';
import { UseFormRegister, RegisterOptions } from 'react-hook-form';
import { TypeOptions } from 'react-toastify';

export interface BaseProps {
  children?: React.ReactNode;
}

export interface IAuth {
  user: User | null;
  loading: boolean;
  SignIn: (creds: LoginFormValues, onSuccess: () => void) => void;
  SignInWithGoogle: (onSuccess: () => void) => void;
  SignUp: (creds: LoginFormValues, onSuccess: () => void) => void;
  SignOut: () => void;
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

export interface RegisterInputProps extends InputProps {
  name: string;
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
  isPrivate: boolean;
}

export interface IToast {
  message: string;
  toast_type: TypeOptions;
  toast_theme: string;
}
