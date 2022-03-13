import React from 'react';
import { Card } from '../../components';
import { cardsData } from '../../consts';
import './cards.css';

export const Cards = () => (
  <div className="cards__wrapper">
    {cardsData.map((elem) => (
      <Card
        key={elem.id}
        image={elem.avatar}
        alt={elem.altCard}
        title={elem.title}
        subtitle={elem.subtitle}
      />
    ))}
  </div>
);
