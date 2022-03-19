import React from 'react';
import './input.css';

export const Input = ({ handleChangeInput, placeholder, type }) => (
  <input className="search__card" type={type || 'text'} name="search_card" placeholder={placeholder} onChange={(event) => handleChangeInput(event)} />
);
