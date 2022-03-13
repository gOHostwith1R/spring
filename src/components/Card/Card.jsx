import React from 'react';
import { Title } from '../Title';
import { Paragraph } from '../Paragraph';
import './card.css';

export const Card = ({
  alt, title, subtitle, image,
}) => (
  <section className="card">
    <img className="card-image" src={image} alt={alt} />
    <div className="card-description">
      <Title type="card__title">{title}</Title>
      <Paragraph type="card__description">{subtitle}</Paragraph>
    </div>
  </section>
);
