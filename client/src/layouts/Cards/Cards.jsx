import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card } from '../../components';
import './cards.css';
import { apiCards } from '../../redux/api/apiCards';

export const Cards = ({ term }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiCards);
  }, [dispatch]);
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
