import React from 'react';
import './navItem.css';

export const NavItem = ({ item, arrow }) => (
  <div className="header__links">
    <a href="/" className="link">{item}</a>
    {arrow && <div className="arrow" />}
  </div>
);
