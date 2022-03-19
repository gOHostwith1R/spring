import React from 'react';
import { Routes, Route } from 'react-router';
import { useSelector } from 'react-redux';
import { LoginPage, MainPage } from '../pages';

export const useRoutes = () => {
  const isAuth = useSelector((state) => state.isAuth);
  console.log(isAuth);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
