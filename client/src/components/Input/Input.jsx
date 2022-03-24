import React from 'react';
import './input.css';

export const Input = ({
  handleChangeInput, placeholder, type, name,
}) => (
  <input name={name} className="search__card" type={type || 'text'} placeholder={placeholder} onChange={(event) => handleChangeInput(event)} />
);
