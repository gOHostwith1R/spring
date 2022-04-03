import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Loader } from '../../components';
import './cards.css';
import { fetchCards } from '../../redux/actions';

export const Cards = ({ term }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);
  const loading = useSelector((state) => state.cards.loading);
  const cards = useSelector((state) => state.cards.cards);
  const filterCards = cards
    .filter((elem) => elem.title.toLowerCase().includes(term.toLowerCase()));
  return (
    <div className="cards__wrapper">
      {loading ? <Loader /> : filterCards.map((elem) => (
        <Card
          key={elem.id}
          image={`http://localhost:5000/${elem.avatar}`}
          alt={elem.altCard}
          title={elem.title}
          subtitle={elem.subtitle}
        />
      ))}
    </div>
  );
};
