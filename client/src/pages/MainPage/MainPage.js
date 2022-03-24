import React, { useState } from 'react';
import { Header, Main } from '../../layouts';

export const MainPage = () => {
  const [openBurger, setOpenBurger] = useState(false);
  const handleOpenBurger = () => {
    setOpenBurger(!openBurger);
  };

  return (
    <>
      <Header handleOpenBurger={handleOpenBurger} />
      <Main
        openBurger={openBurger}
        handleOpenBurger={handleOpenBurger}
      />
    </>
  );
};
