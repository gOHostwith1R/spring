import React from 'react';
import './dropdownContent.css';
import classNames from 'classnames';

export const DropdownContent = ({ arrayOfLinks }) => (
  <div className="dropdown__content">
    {arrayOfLinks.map((elem) => (
      elem.type === 'paragraph'
        ? <p className="upper__item" key={elem.id}>{elem.text}</p>
        : <a href="/" className={classNames('dropdown__link', { active__link: elem.type === 'activeLink' })} key={elem.id}>{elem.text}</a>
    ))}
  </div>
);
