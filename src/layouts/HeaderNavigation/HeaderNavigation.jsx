import React from 'react';
import './headerNavigation.css';
import { navigationData } from '../../consts';
import { Burger, DropdownContent, NavItem } from '../../components';

export const HeaderNavigation = () => (
  <nav className="header-navigation">
    {navigationData.map((elem) => (
      <div className="dropdown-wrapper" key={elem.id}>
        <NavItem
          item={elem.name}
          arrow={elem.content}
          key={elem.id}
        />
        {elem.content && <DropdownContent arrayOfLinks={elem.items} />}
      </div>
    ))}
    <Burger />
  </nav>
);
