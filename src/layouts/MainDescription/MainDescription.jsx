import React from 'react';
import './mainDescription.css';
import { Paragraph, Title } from '../../components';

export const MainDescription = () => (
  <div className="wrapper-description">
    <Title type="main-title">Projects</Title>
    <Paragraph type="description">
      From configuration to security, web apps to big data—whatever
      the infrastructure needs of your application may be, there is a Spring
      Project to help you build it.
      Start small and use just what you need—Spring is modular by design.
    </Paragraph>
  </div>
);
