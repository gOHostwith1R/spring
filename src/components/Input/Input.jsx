import React from 'react';
import './input.css';

export const Input = ({ handleChangeInput }) => (
  <div className="input__wrapper">
    <input className="search__card" type="text" name="search_card" placeholder="Enter the card title" onChange={(event) => handleChangeInput(event)} />
  </div>
);
