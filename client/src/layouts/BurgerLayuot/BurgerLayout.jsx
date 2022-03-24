import React from 'react';
import './burgerLayout.css';
import classNames from 'classnames';
import { navigationData } from '../../constants';
import { BurgerItems } from '../BurgerItems';

export const BurgerLayout = ({
  openBurger, handleOpenBurger, handleOpenBurgerDropdown,
  openBurgerDropdown, idOpenedBurgerDropdown,
}) => (
  <div className={classNames('burger__layout', { open__burger: openBurger })}>
    <span
      className="burger__menu-close"
      onClick={handleOpenBurger}
      onKeyDown={handleOpenBurger}
      tabIndex={0}
      role="menubar"
    />
    <div className="burger__layout-items">
      {navigationData.map((elem) => (
        <BurgerItems
          key={elem.id}
          id={elem.id}
          name={elem.name}
          content={elem.content}
          items={elem.items}
          handleOpenBurgerDropdown={handleOpenBurgerDropdown}
          openBurgerDropdown={openBurgerDropdown}
          idOpenedBurgerDropdown={idOpenedBurgerDropdown}
        />
      ))}
    </div>
  </div>
);
