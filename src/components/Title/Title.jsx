import React from 'react';
import './title.css';
import classNames from 'classnames';

export const Title = ({ type, children }) => (
  <h1 className={classNames({ main__title: type === 'main-title', card__title: type === 'card__title' })}>{children}</h1>
);
