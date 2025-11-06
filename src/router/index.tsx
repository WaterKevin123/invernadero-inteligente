import React from 'react'
import { Routes, Route } from 'react-router-dom'
import routes from './config'
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {routes.map((r: any, i: number) => (
        <Route key={i} path={r.path} element={r.element} />
      ))}
    </Routes>
  )
}
export default AppRoutes
