import { Navigate } from 'react-router';
import React from 'react';

export const RequireAuth = ({ children, isAuth }) => (!isAuth ? <Navigate to="/login" /> : children);
