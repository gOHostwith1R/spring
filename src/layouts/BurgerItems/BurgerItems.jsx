import React from 'react';
import './burgerItems.css';
import { BurgerDropdown, BurgerNavigation } from '../../components';

export const BurgerItems = ({
  id, name, content, items, handleOpenBurgerDropdown, openBurgerDropdown, idOpenedBurgerDropdown,
}) => (
  <div className="burger-wrapper__dropdown">
    <BurgerNavigation
      id={id}
      name={name}
      content={content}
      handleOpenBurgerDropdown={handleOpenBurgerDropdown}
    />
    {content && (
    <BurgerDropdown
      items={items}
      openBurgerDropdown={openBurgerDropdown}
      idOpenedBurgerDropdown={idOpenedBurgerDropdown}
      id={id}
    />
    ) }
  </div>
);
