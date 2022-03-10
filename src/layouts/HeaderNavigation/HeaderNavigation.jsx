import React from 'react';
import './headerNavigation.css';
import { navigationData } from '../../mock/mockNavigation';
import { NavItem } from '../../components';

export const HeaderNavigation = () => (
  <div className="header-navigation">
    {navigationData.map((elem) => <NavItem item={elem.name} />)}
  </div>
);
