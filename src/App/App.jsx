import React, { useState } from 'react';
import './app.css';
import { Header, Main } from '../layouts';

export const App = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const [idOpenedBurgerDropdown, setIdOpenedBurgerDropdown] = useState(-1);
  const [openBurgerDropdown, setOpenBurgerDropdown] = useState(false);
  const handleOpenBurger = () => {
    setOpenBurger(!openBurger);
  };

  const handleOpenBurgerDropdown = (id) => {
    setOpenBurgerDropdown(!openBurgerDropdown);
    setIdOpenedBurgerDropdown(id);
  };

  return (
    <>
      <Header handleOpenBurger={handleOpenBurger} />
      <Main
        openBurger={openBurger}
        handleOpenBurger={handleOpenBurger}
        handleOpenBurgerDropdown={handleOpenBurgerDropdown}
        openBurgerDropdown={openBurgerDropdown}
        idOpenedBurgerDropdown={idOpenedBurgerDropdown}
      />
    </>
  );
};
