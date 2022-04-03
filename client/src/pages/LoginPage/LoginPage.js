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
import { clearErrors } from '../../redux/actions/authActions';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { control, handleSubmit } = useForm();
  const errors = useSelector((state) => state.user.errors);
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
        <div>
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
          {errors && <Paragraph type="error__auth">{errors}</Paragraph> }
        </div>
        <Button type="submit" classType="button__login">Login</Button>
        <CustomLink path="/signup" onClick={() => dispatch(clearErrors)}>Sign Up</CustomLink>
      </AuthForm>
    </AuthWrapper>
  );
};
