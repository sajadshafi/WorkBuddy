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

import { auth } from '../../firebase/BaseConfig';
import { BaseProps, IAuth, LoginFormValues } from '../../interfaces/interfaces';
import TAuth from '../../firebase/services/AuthServices';
import swal from '../../utils/swal';
import { alertType } from '../../utils/constants';
import PageLoading from '../../pages/loading/PageLoading';

const AuthContext = createContext<IAuth>({
  user: auth.currentUser,
  isLoggedIn: false,
  loading: false,
  SignIn: () => {},
  SignUp: () => {},
  SignOut: () => {},
});

export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: BaseProps) => {
  // #region state variables
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const navigate = useNavigate();
  // #endregion
  // #region Auth Functions
  const SignUp = (creds: LoginFormValues) => {};

  const SignIn = useCallback(
    async (creds: LoginFormValues, onSuccess: () => void) => {
      setIsLoading(true);
      TAuth.SignIn(creds)
        .then(userCredential => {
          const { user } = userCredential;
          if (user) {
            setCurrentUser(user);
            setIsLoggedIn(true);
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

  const SignOut = useCallback(async () => {
    setIsLoading(true);
    try {
      await TAuth.SignOut();
      setIsLoggedIn(false);
      setCurrentUser(null);
    } catch (error) {
      swal.showAlert('Oops!', 'Failed to Sign out', 'Ok', alertType.ERROR);
    }
    navigate('/signin', { replace: true });
  }, [navigate]);

  // #endregion

  const authValues: IAuth = useMemo(
    () => ({
      user: currentUser,
      isLoggedIn,
      loading: isLoading,
      SignIn,
      SignUp,
      SignOut,
    }),
    [currentUser, isLoggedIn, isLoading, SignIn, SignOut]
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  if (isLoading) return <PageLoading />;

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
