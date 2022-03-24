import React from 'react';
import classNames from 'classnames';
import './button.css';

export const Button = ({
  children, type, classType, onClick,
}) => (
  <button
    onClick={onClick}
    type={type ? 'submit' : 'button'}
    className={classNames('button', ({
      button__login: classType === 'button__login',
    }))}
  >
    {children}
  </button>
);
