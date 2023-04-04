import { RouteValue } from '../interfaces/interfaces';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';
import Registration from '../pages/registration/Registration';

const routes: RouteValue[] = [
  {
    path: '/',
    component: <Home />,
    isPrivate: false,
  },
  {
    path: '/signin',
    component: <Login />,
    isPrivate: false,
  },
  {
    path: '/signup',
    component: <Registration />,
    isPrivate: false,
  },
  {
    path: '/dashboard',
    component: <Dashboard />,
    isPrivate: true,
  },
];

export default routes;
