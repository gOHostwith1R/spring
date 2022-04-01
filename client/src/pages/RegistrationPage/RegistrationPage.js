import React from 'react';
import './registrationPage.css';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  Button, CustomLink, Input, Title,
} from '../../components';
import { AuthWrapper } from '../../layouts';
import { AuthForm } from '../../layouts/AuthForm';
import { authRegister } from '../../redux/actions';

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(authRegister(data));
  };
  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Title type="login__title">Sign Up</Title>
        <Controller
          name="userName"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="User Name"
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
              placeholder="Password"
              type="password"
            />
          )}
        />
        <Controller
          name="repeatPassword"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Repeat password"
              type="password"
            />
          )}
        />
        <Controller
          name="firstName"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="First Name"
            />
          )}
        />
        <Controller
          name="lastName"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Last name"
            />
          )}
        />
        <Controller
          name="age"
          control={control}
          render={({ field: { ref, onChange } }) => (
            <Input
              inputRef={ref}
              onChange={onChange}
              placeholder="Age"
            />
          )}
        />
        <Button type="submit">Sign Up</Button>
        <CustomLink path="/login">Login</CustomLink>
      </AuthForm>
    </AuthWrapper>
  );
};
