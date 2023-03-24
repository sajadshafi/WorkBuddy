import { RouteValue } from '../interfaces/interfaces';
import Login from '../pages/login/Login';
import Dashboard from '../pages/dashboard/Dashboard';
import Home from '../pages/home/Home';

const routes: RouteValue[] = [
  {
    path: '/',
    component: <Home />,
  },
  {
    path: '/signin',
    component: <Login />,
  },
  {
    path: '/dashboard',
    component: <Dashboard />,
  },
];

export default routes;
