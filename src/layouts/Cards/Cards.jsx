import React from 'react';
import './cards.css';
import { Card } from '../../components';

import { cardsData } from '../../consts';

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
