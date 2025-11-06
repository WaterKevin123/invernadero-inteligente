import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './config';

export const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL || '/'}>
      <Routes>
        {routes.map((r: any, i: number) => (
          <Route key={i} path={r.path} element={r.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
