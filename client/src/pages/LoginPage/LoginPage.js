import React, { useState } from 'react';
import './loginPage.css';
import { useDispatch } from 'react-redux';
import { Button, Input, Paragraph } from '../../components';
import { authLogin } from '../../redux/actions';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [inputsData, setInputsData] = useState({ userName: '', password: '' });
  const [error, setError] = useState(false);
  const changeInputs = (e) => {
    setInputsData({ ...inputsData, [e.target.name]: e.target.value });
  };

  const onClick = () => (
    inputsData.password === '1234' && inputsData.userName === 'admin' ? dispatch(authLogin(inputsData.userName, inputsData.password)) : setError(true)
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
