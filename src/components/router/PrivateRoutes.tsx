import { Outlet, Navigate } from 'react-router-dom';

import { useAuth } from '../../store/auth-context/AuthContext';

const PrivateRoutes = () => {
  const { user } = useAuth();
  return user ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
