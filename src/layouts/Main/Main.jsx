import React, { useState } from 'react';
import './main.css';
import { MainDescription } from '../MainDescription';
import { Input } from '../../components';
import { Cards } from '../Cards';
import { BurgerLayout } from '../BurgerLayuot';
import { InputWrapper } from '../InputWrapper';

export const Main = ({
  openBurger, handleOpenBurger,
}) => {
  const [term, setTerm] = useState('');
  const [idOpenedBurgerDropdown, setIdOpenedBurgerDropdown] = useState(-1);
  const [openBurgerDropdown, setOpenBurgerDropdown] = useState(false);

  const handleChangeInput = (e) => {
    setTimeout(() => setTerm(e.target.value), 300);
  };

  const handleOpenBurgerDropdown = (id) => {
    setOpenBurgerDropdown(!openBurgerDropdown);
    setIdOpenedBurgerDropdown(id);
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
        <InputWrapper>
          <Input handleChangeInput={handleChangeInput} placeholder="Enter the card title" />
        </InputWrapper>
        <Cards term={term} />
      </div>
    </main>
  );
};
