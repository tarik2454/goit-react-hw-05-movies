import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <NavLink to="/">Ссылка</NavLink>
      <NavLink to="/2">Ссылка2</NavLink>

      <Outlet />
    </>
  );
};
