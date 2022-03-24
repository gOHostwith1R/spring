import React from 'react';
import './burger.css';

export const Burger = ({ handleOpenBurger }) => (
  <div
    tabIndex={0}
    role="menubar"
    className="burger-menu"
    onClick={handleOpenBurger}
    onKeyDown={handleOpenBurger}
  >
    <span
      className="burger-lines"
      onClick={handleOpenBurger}
      onKeyDown={handleOpenBurger}
      tabIndex={0}
      role="menubar"
    />
  </div>
);
