import './App.scss';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ThemeProvider from './store/theme-context/ThemeContext';
import CustomRouter from './components/router/CustomRouter';
import Navbar from './components/navbar/Navbar';
import routes from './utils/routes';
import AuthProvider from './store/auth-context/AuthContext';

const App = () => {
  const location = useLocation();
  return (
    <div className="bg-lightgray dark:bg-darkgray">
      {}
      {location.pathname !== '/signin' &&
        routes.find(route => route.path === location.pathname) !==
          undefined && <Navbar />}
      <CustomRouter />
    </div>
  );
};

const WrappedApp = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <App />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnHover
            theme="light"
          />
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default WrappedApp;
