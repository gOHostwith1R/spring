import React from 'react';
import './loginPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import {
  Button, CustomLink, Input, Paragraph, Title,
} from '../../components';
import { AuthWrapper } from '../../layouts';
import { AuthForm } from '../../layouts/AuthForm';
import { authLogin } from '../../redux/actions';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const error = useSelector((state) => state.login.error);

  const onSubmit = (data) => dispatch(authLogin(data));

  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Title type="login__title">Login</Title>
        <Controller
          name="userName"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Enter the user name"
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Enter the password"
              type="password"
            />
          )}
        />
        <Button type="submit" classType="button__login">Login</Button>
        <CustomLink path="/signup">Sign Up</CustomLink>
        {error && <Paragraph type="error">Incorrect data</Paragraph> }
      </AuthForm>
    </AuthWrapper>
  );
};
