import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from '../../components';
import './cards.css';

export const Cards = ({ term }) => {
  const cards = useSelector((state) => state.cards.cards);
  const filterCards = cards
    .filter((elem) => elem.title.toLowerCase().includes(term.toLowerCase()));
  return (
    <div className="cards__wrapper">
      {filterCards.map((elem) => (
        <Card
          key={elem.id}
          image={elem.avatar}
          alt={elem.altCard}
          title={elem.title}
          subtitle={elem.subtitle}
        />
      ))}
      {filterCards.length === 0 && <p className="not-found">No results</p>}
    </div>
  );
};
