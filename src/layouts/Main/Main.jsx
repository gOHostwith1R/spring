import React, { useState } from 'react';
import './main.css';
import { MainDescription } from '../MainDescription';
import { Input } from '../../components';
import { Cards } from '../Cards';
import { BurgerLayout } from '../BurgerLayuot';

export const Main = ({
  openBurger, handleOpenBurger, handleOpenBurgerDropdown,
  openBurgerDropdown, idOpenedBurgerDropdown,
}) => {
  const [term, setTerm] = useState('');
  const handleChangeInput = (e) => {
    setTimeout(() => setTerm(e.target.value), 300);
  };
  return (
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
        <Input handleChangeInput={handleChangeInput} />
        <Cards term={term} />
      </div>
    </main>
  );
};
