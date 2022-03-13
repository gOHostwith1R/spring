import React from 'react';
import './paragraph.css';
import classNames from 'classnames';

export const Paragraph = ({ children, type }) => (
  <p className={classNames({ main__description: type === 'description', card__description: type === 'card__description' })}>{children}</p>
);
