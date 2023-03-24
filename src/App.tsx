import './App.scss';
import { HashRouter, useLocation } from 'react-router-dom';

import ThemeProvider from './store/theme-context/ThemeContext';
import CustomRouter from './components/router/CustomRouter';
import Navbar from './components/navbar/Navbar';
import routes from './utils/routes';

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
    <HashRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HashRouter>
  );
};

export default WrappedApp;
