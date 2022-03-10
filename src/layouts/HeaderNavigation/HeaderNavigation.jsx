import React from 'react';
import './headerNavigation.css';
import { navigationData } from '../../consts/constNavigation';
import { NavItem } from '../../components';

export const HeaderNavigation = () => (
  <div className="header-navigation">
    {navigationData.map((elem) => <NavItem item={elem.name} arrow={elem.content} key={elem.id} />)}
  </div>
);
