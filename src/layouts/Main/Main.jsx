import React from 'react';
import './main.css';
import { MainDescription } from '../MainDescription';
import { Input } from '../../components';
import { Cards } from '../Cards';
import { BurgerLayout } from '../BurgerLayuot';

export const Main = ({ openBurger, handleOpenBurger }) => (
  <main>
    <BurgerLayout openBurger={openBurger} handleOpenBurger={handleOpenBurger} />
    <MainDescription />
    <div className="main__content">
      <Input />
      <Cards />
    </div>
  </main>
);
