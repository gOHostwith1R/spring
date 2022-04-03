import React from 'react';
import './registrationPage.css';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import {
  Button, CustomLink, Input, Paragraph, Title,
} from '../../components';
import { AuthWrapper } from '../../layouts';
import { AuthForm } from '../../layouts/AuthForm';
import { authRegister } from '../../redux/actions';
import { clearErrors } from '../../redux/actions/authActions';

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const errors = useSelector((state) => state.user.errors)
    .reduce((obj, item) => {
      obj[item.msg] = item.msg;
      obj[item.param] = item.param;
      return obj;
    }, {});
  const { control, handleSubmit } = useForm();
  const onSubmit = (data) => {
    dispatch(authRegister(data));
  };
  return (
    <AuthWrapper>
      <AuthForm onSubmit={handleSubmit(onSubmit)}>
        <Title type="login__title">Sign Up</Title>
        <div>
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
          {errors.userName && <Paragraph type="error__auth">Username must contain 3 symbols or more</Paragraph>}
        </div>
        <div>
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
          {errors.password && <Paragraph type="error__auth">Password must contain 1 number and 1 letter</Paragraph>}
        </div>
        <div>
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
          {errors.passwordsNoMatch && (
          <Paragraph type="error__auth">
            {'Passwords don\'t match'}
          </Paragraph>
          )}
        </div>
        <div>
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
          {errors.firstName && <Paragraph type="error__auth">First name must contain 3 symbols or more</Paragraph>}
        </div>
        <div>
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
          {errors.lastName && <Paragraph type="error__auth">Last name must contain 3 symbols or more</Paragraph>}
        </div>
        <div>
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
          {errors.age && <Paragraph type="error__auth">Age must be a number, can’t be a zero</Paragraph>}
        </div>
        <Button type="submit">Sign Up</Button>
        <CustomLink path="/login" onClick={() => dispatch(clearErrors)}>Login</CustomLink>
      </AuthForm>
    </AuthWrapper>
  );
};
