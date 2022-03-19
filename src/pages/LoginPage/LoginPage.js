import React, { useState } from 'react';
import './loginPage.css';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../../components';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [inputsData, setInputsData] = useState({ userName: '', password: '' });
  const changeInputs = (e) => {
    setInputsData({ ...inputsData, [e.target.name]: e.target.value });
  };

  const onClick = () => (
    inputsData.password === '1234' && inputsData.userName === 'admin' ? dispatch({ type: 'LOGIN' }) : console.log('f')
  );
  return (
    <div className="login__wrapper">
      <div className="login__layout">
        <Input placeholder="Enter the username" handleChangeInput={changeInputs} name="userName" />
        <Input placeholder="Enter the password" type="password" handleChangeInput={changeInputs} name="password" />
        <Button type="submit" classType="button__login" onClick={onClick}>Login</Button>
      </div>
    </div>
  );
};
