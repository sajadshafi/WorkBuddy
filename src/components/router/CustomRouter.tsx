import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/not-found/NotFound';
import routes from '../../utils/routes';
import PrivateRoutes from './PrivateRoutes';

const CustomRouter = () => {
  return (
    <Routes>
      {routes &&
        routes.map(route =>
          route.isPrivate ? (
            <Route
              key={route.path}
              element={<PrivateRoutes />}>
              <Route
                path={route.path}
                element={route.component}
              />
            </Route>
          ) : (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          )
        )}
      <Route
        path="/*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default CustomRouter;
