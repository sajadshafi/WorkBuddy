import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User,
  setPersistence,
  browserLocalPersistence,
} from 'firebase/auth';
import { auth } from '../BaseConfig';
import { LoginFormValues } from '../../interfaces/interfaces';

setPersistence(auth, browserLocalPersistence);
const SignIn = async ({ email, password }: LoginFormValues) => {
  const result = await signInWithEmailAndPassword(auth, email, password);
  return result;
};

const SignUp = async ({ email, password }: LoginFormValues) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const { user } = userCredential;
      return user;
    })
    .catch(error => {
      return error;
    });
};

const SignOut = async () => {
  await signOut(auth);
};

const IsLoggedIn: () => Promise<User | null> = async () => {
  let currentUser = null;
  await onAuthStateChanged(auth, user => {
    if (user) {
      currentUser = user;
    }
  });
  return currentUser;
};

const TAuth = {
  SignIn,
  SignUp,
  SignOut,
  IsLoggedIn,
};

export default TAuth;
