import React, { useState } from 'react';
import './app.css';
import { Header, Main } from '../layouts';

export const App = () => {
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
