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
  SignUp: (creds: UserFormValues, onSuccess: () => void) => void;
  SignOut: () => void;
}

export interface InputProps {
  label: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  reg: UseFormRegister<any>;
  registerOptions: RegisterOptions;
  icon?: React.ReactNode;
  classes?: string;
  error?: string;
  name: string;
}

export interface LoginInputProps extends InputProps {
  name: 'email' | 'password' | 'displayName';
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

export interface UserFormValues {
  email: string;
  password: string;
  displayName: string;
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
