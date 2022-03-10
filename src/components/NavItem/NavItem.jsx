import React from 'react';
import './navItem.css';

export const NavItem = ({ item, arrow }) => (
  <div className="wrapper-header__items">
    <a href="/" className="header__link">{item}</a>
    {arrow && <div className="arrow" />}
  </div>
);
