import React from 'react';
import './header.css';
import { ReactComponent as Logo } from '../../images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg';
import { HeaderNavigation } from '../HeaderNavigation';

export const Header = () => (
  <header className="header">
    <div className="header-wrapper">
      <Logo className="logo" />
      <HeaderNavigation />
    </div>
  </header>
);
