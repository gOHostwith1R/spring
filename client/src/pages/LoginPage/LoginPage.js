import React, { useState } from 'react';
import './loginPage.css';
import { Button, Input, Paragraph } from '../../components';

export const LoginPage = () => {
  const [inputsData, setInputsData] = useState({ userName: '', password: '' });
  const [error, setError] = useState(false);
  const changeInputs = (e) => {
    setInputsData({ ...inputsData, [e.target.name]: e.target.value });
  };

  const onClick = () => (
    inputsData.password === '1234' && inputsData.userName === 'admin' ? console.log('g') : setError(true)
  );
  return (
    <div className="login__wrapper">
      <div className="login__layout">
        <Input placeholder="Enter the username" handleChangeInput={changeInputs} name="userName" />
        <Input placeholder="Enter the password" type="password" handleChangeInput={changeInputs} name="password" />
        <Button type="submit" classType="button__login" onClick={onClick}>Login</Button>
        {error && <Paragraph type="error">Incorrect data</Paragraph> }
      </div>
    </div>
  );
};
