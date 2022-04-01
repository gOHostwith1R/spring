import React from 'react';
import './input.css';

export const Input = ({
  placeholder, type, name, onChange, ref,
}) => (
  <input
    name={name}
    className="search__card"
    type={type || 'text'}
    placeholder={placeholder}
    onChange={onChange}
    ref={ref}
  />
);
