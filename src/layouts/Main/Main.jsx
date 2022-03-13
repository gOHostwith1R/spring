import React from 'react';
import './main.css';
import { MainDescription } from '../MainDescription';
import { Input } from '../../components';
import { Cards } from '../Cards';
import { BurgerLayout } from '../BurgerLayuot';

export const Main = ({
  openBurger, handleOpenBurger, handleOpenBurgerDropdown,
  openBurgerDropdown, idOpenedBurgerDropdown,
}) => (
  <main>
    <BurgerLayout
      openBurger={openBurger}
      handleOpenBurger={handleOpenBurger}
      handleOpenBurgerDropdown={handleOpenBurgerDropdown}
      openBurgerDropdown={openBurgerDropdown}
      idOpenedBurgerDropdown={idOpenedBurgerDropdown}
    />
    <MainDescription />
    <div className="main__content">
      <Input />
      <Cards />
    </div>
  </main>
);
