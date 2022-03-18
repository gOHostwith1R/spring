import React from 'react';
import { Routes, Route } from 'react-router';
import { LoginPage, MainPage } from '../pages';

export const useRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);
