import React from 'react';
import './burgerLayout.css';
import classNames from 'classnames';

export const BurgerLayout = ({ openBurger, handleOpenBurger }) => (
  <div className={classNames('burger__layout', { open__burger: openBurger })}>
    <span
      className="hamburger__menu-close"
      onClick={handleOpenBurger}
      onKeyDown={handleOpenBurger}
      tabIndex={0}
      role="menubar"
    />
  </div>
);
