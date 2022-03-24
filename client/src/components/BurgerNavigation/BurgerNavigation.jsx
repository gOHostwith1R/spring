import React from 'react';
import './burgerNavigation.css';

export const BurgerNavigation = ({
  id, name, content, handleOpenBurgerDropdown,
}) => (
  <div
    tabIndex={0}
    className="burger__item"
    key={id}
    onClick={() => handleOpenBurgerDropdown(id)}
    onKeyDown={() => handleOpenBurgerDropdown(id)}
    role="menuitem"
  >
    <a href="/" className="burger__link">{name}</a>
    {content && <div className="burger__arrow" /> }
  </div>
);
