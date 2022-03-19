import React from 'react';
import './loginPage.css';
import { Input, Title } from '../../components';

export const LoginPage = () => (
  <div className="login__wrapper">
    <div className="login__layout">
      <Title type="login__title">Login</Title>
      <Input placeholder="Enter the login" />
      <Input placeholder="Enter the password" type="password" />
    </div>
  </div>
);
