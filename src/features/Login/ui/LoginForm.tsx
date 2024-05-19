import React, { useCallback, useState } from 'react';

import cls from './LoginForm.module.scss';
import validator from 'validator';

import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';
import InputType1 from 'shared/ui/InputType1/InputType1';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getLoginData } from '../model/selectors/getLoginData/getLoginData';
import { getLoginError } from '../model/selectors/getLoginError/getLoginError';
import { getLoginLoading } from '../model/selectors/getLoginLoading/getLoginLoading';
import { LoginActions } from '../model/slices/LoginSlice';
import { LoginSendCodeThunk } from '../model/services/LoginSendCodeThunk';

interface LoginFormProps {
  className?: string;
}

const LoginForm = ({ className }: LoginFormProps) => {
  const dispatch = useAppDispatch();

  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const loginData = useSelector(getLoginData);
  const verifyUserError = useSelector(getLoginError);
  const verifyUserLoading = useSelector(getLoginLoading);

  const onSetEmail = useCallback(
    (value: string) => {
      dispatch(LoginActions.setEmail(value));
    },
    [dispatch],
  );
  const onSetPassword = useCallback(
    (value: string) => {
      dispatch(LoginActions.setPassword(value));
    },
    [dispatch],
  );

  const submitLoginForm = (e: React.FormEvent) => {
    e.preventDefault();
    const emailValid = validator.isEmail(loginData.email);
    const passwordValid = loginData.password.length >= 8;
    if (!emailValid || !passwordValid) {
      if (!passwordValid) {
        setPasswordError('Пароль должен содержать не меньше 8 символов!');
      } else if (passwordValid) {
        setPasswordError('');
      }
      if (!emailValid) {
        setEmailError('Некорректная почта!');
      } else if (emailValid) {
        setEmailError('');
      }
    } else {
      setEmailError('');
      setPasswordError('');

      dispatch(
        LoginSendCodeThunk({
          email: loginData.email,
          password: loginData.password,
        }),
      );
    }
  };

  return (
    <form
      className={classNames(cls.LoginForm, {}, [])}
      onSubmit={e => submitLoginForm(e)}
    >
      <p>{emailError}</p>
      <InputType1
        type={'text'}
        value={loginData.email}
        onChange={e => onSetEmail(e.target.value)}
      />
      <p>{passwordError}</p>
      <InputType1
        type={'text'}
        value={loginData.password}
        onChange={e => onSetPassword(e.target.value)}
      />
      <ButtonType1 type='submit' text='Войти' />
    </form>
  );
};

export default LoginForm;
