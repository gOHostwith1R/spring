import React from 'react';
import './authForm.css';

export const AuthForm = ({ children, onSubmit }) => (
  <form onSubmit={onSubmit} className="form__auth">
    {children}
  </form>
);
