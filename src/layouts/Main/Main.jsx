import React from 'react';
import './main.css';
import { MainDescription } from '../MainDescription';
import { Input } from '../../components';

export const Main = () => (
  <main>
    <MainDescription />
    <div className="main__content">
      <Input />
    </div>
  </main>
);
