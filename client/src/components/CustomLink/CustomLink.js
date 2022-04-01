import React from 'react';
import { Link } from 'react-router-dom';
import './customLink.css';

export const CustomLink = ({ children, path }) => (
  <Link className="auth__link" to={path}>{children}</Link>
);
