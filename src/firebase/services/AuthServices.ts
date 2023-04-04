import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
  signInWithPopup,
  updateProfile,
  User,
} from 'firebase/auth';
import { firebaseAuth } from '../BaseConfig';
import { LoginFormValues, UserFormValues } from '../../interfaces/interfaces';
import Providers from '../providers/Providers';

setPersistence(firebaseAuth, browserLocalPersistence);
const SignIn = async ({ email, password }: LoginFormValues) => {
  const result = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );
  return result;
};

const SignUp = async ({ email, password }: UserFormValues) => {
  const result = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );
  return result;
};

const SignOut = async () => {
  await signOut(firebaseAuth);
};

const SignInWithGoogle = async () => {
  const result = await signInWithPopup(firebaseAuth, Providers.googleProvider);
  return result;
};

const UpdateProfile = async (
  currentUser: User,
  displayName: string | null,
  photoURL: string | null
) => {
  const result = await updateProfile(currentUser, {
    displayName,
    photoURL,
  });
  return result;
};

const TAuth = {
  SignIn,
  SignUp,
  SignOut,
  UpdateProfile,
  SignInWithGoogle,
};

export default TAuth;
