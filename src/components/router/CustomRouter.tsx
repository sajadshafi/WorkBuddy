import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/not-found/NotFound';
import Login from '../../pages/login/Login';
import Dashboard from '../../pages/dashboard/Dashboard';
import Home from '../../pages/home/Home';

const CustomRouter = () => {
  return (
    <Routes>
      <Route
        path="/signin"
        element={<Login />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default CustomRouter;
