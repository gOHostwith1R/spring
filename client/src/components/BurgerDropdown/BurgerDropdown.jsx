import React from 'react';
import classNames from 'classnames';
import './burgerDropdown.css';

export const BurgerDropdown = ({
  items, openBurgerDropdown, id, idOpenedBurgerDropdown,
}) => (
  <div
    className={classNames('burger__dropdown', {
      burger__dropdown_open: openBurgerDropdown && idOpenedBurgerDropdown === id,
    })}
  >
    {items.map((elem) => (elem.type === 'paragraph' ? <p className="upper-item__burger" key={elem.id}>{elem.text}</p>
      : <a href="/" key={elem.id} className="burger__dropdown-link">{elem.text}</a>))}
  </div>
);
