import { Navigate } from 'react-router';
import React from 'react';

export const WithoutAuth = ({ children, isAuth }) => (isAuth ? <Navigate to="/" /> : children);
