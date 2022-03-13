import React from 'react';
import './main.css';
import { MainDescription } from '../MainDescription';
import { Input } from '../../components';
import { Cards } from '../Cards';

export const Main = () => (
  <main>
    <MainDescription />
    <div className="main__content">
      <Input />
      <Cards />
    </div>
  </main>
);
