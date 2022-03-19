import React from 'react';
import './loginPage.css';
import { Input } from '../../components';

export const LoginPage = () => (
  <div className="login__wrapper">
    <div className="login__layout">
      <Input placeholder="Enter the login" />
      <Input placeholder="Enter the password" type="password" />
      <button type="submit">Login</button>
    </div>
  </div>
);
