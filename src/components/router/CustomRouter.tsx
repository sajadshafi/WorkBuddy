import { Routes, Route } from 'react-router-dom';
import NotFound from '../../pages/not-found/NotFound';
import routes from '../../utils/routes';

const CustomRouter = () => {
  return (
    <Routes>
      {routes &&
        routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={route.component}
          />
        ))}
      <Route
        path="/*"
        element={<NotFound />}
      />
    </Routes>
  );
};

export default CustomRouter;
