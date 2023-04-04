import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import { User, onAuthStateChanged } from 'firebase/auth';

import { firebaseAuth } from '../../firebase/BaseConfig';
import {
  BaseProps,
  IAuth,
  LoginFormValues,
  UserFormValues,
} from '../../interfaces/interfaces';
import TAuth from '../../firebase/services/AuthServices';
import swal from '../../utils/swal';
import { alertType } from '../../utils/constants';
import PageLoading from '../../pages/loading/PageLoading';

const AuthContext = createContext<IAuth>({
  user: firebaseAuth.currentUser,
  loading: false,
  SignIn: () => {},
  SignUp: () => {},
  SignOut: () => {},
  SignInWithGoogle: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: BaseProps) => {
  // #region state variables
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  // #endregion
  // #region Auth Functions
  const SignUp = useCallback((creds: UserFormValues, onSuccess: () => void) => {
    setIsLoading(true);
    TAuth.SignUp(creds)
      .then(userCredential => {
        const { user } = userCredential;
        if (user) {
          setCurrentUser(user);
          TAuth.UpdateProfile(user, creds.displayName, null)
            .then(result => {
              console.log('Updated Data: ', result);
            })
            .catch(error => {
              swal.showAlert('Error', error.message, 'Ok', alertType.ERROR);
            });
          onSuccess();
        } else {
          swal.showAlert(
            'Error',
            'Something went wrong!',
            'Ok',
            alertType.ERROR
          );
        }
        setIsLoading(false);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          swal.showAlert(
            'Error',
            'Email already registered! Please try Sign in',
            'Ok',
            alertType.ERROR
          );
        } else if (error.code === 'auth/too-many-requests') {
          swal.showAlert(
            'Error',
            'Account disabled! Too many attempts!',
            'Ok',
            alertType.ERROR
          );
        }
        setIsLoading(false);
      });
  }, []);

  const SignIn = useCallback(
    async (creds: LoginFormValues, onSuccess: () => void) => {
      setIsLoading(true);
      TAuth.SignIn(creds)
        .then(userCredential => {
          const { user } = userCredential;
          if (user) {
            setCurrentUser(user);
            onSuccess();
          } else {
            swal.showAlert(
              'Error',
              'Something went wrong!',
              'Ok',
              alertType.ERROR
            );
          }
          setIsLoading(false);
        })
        .catch(error => {
          if (error.code === 'auth/wrong-password') {
            swal.showAlert(
              'Error',
              'Password is wrong!',
              'Ok',
              alertType.ERROR
            );
          } else if (error.code === 'auth/too-many-requests') {
            swal.showAlert(
              'Error',
              'Account disabled! Too many attempts!',
              'Ok',
              alertType.ERROR
            );
          }
          setIsLoading(false);
        });
    },
    []
  );

  const LoginWithGoogle = (onSuccess: () => void) => {
    TAuth.SignInWithGoogle()
      .then(userCredentials => {
        const { user } = userCredentials;
        if (user) {
          setCurrentUser(user);
          onSuccess();
        } else {
          swal.showAlert(
            'Error',
            'Something went wrong!',
            'Ok',
            alertType.ERROR
          );
        }
      })
      .catch(error => {
        swal.showAlert('Error', error.message, 'Ok', alertType.ERROR);
      });
  };

  const SignOut = useCallback(async () => {
    setIsLoading(true);
    try {
      await TAuth.SignOut();
      setCurrentUser(null);
    } catch (error) {
      swal.showAlert('Oops!', 'Failed to Sign out', 'Ok', alertType.ERROR);
    }
    setIsLoading(false);
    navigate('/signin', { replace: true });
  }, [navigate]);
  // #endregion

  const authValues: IAuth = useMemo(
    () => ({
      user: currentUser,
      loading: isLoading,
      SignIn,
      SignUp,
      SignOut,
      SignInWithGoogle: LoginWithGoogle,
    }),
    [currentUser, isLoading, SignIn, SignOut, SignUp]
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, user => {
      setCurrentUser(user);
      setIsAuthLoading(false);
    });
    return unsubscribe;
  }, []);

  if (isAuthLoading) return <PageLoading />;

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
