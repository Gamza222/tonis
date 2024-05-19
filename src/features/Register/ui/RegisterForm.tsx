import React, { useCallback, useState } from 'react';

import cls from './RegisterForm.module.scss';

import InputType1 from 'shared/ui/InputType1/InputType1';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { useSelector } from 'react-redux';
import { RegisterActions } from '../model/slices/RegisterSlice';
import { getRegisterData } from '../model/selectors/getRegisterData/getRegisterData';
import { getRegisterError } from '../model/selectors/getRegisterError/getRegisterError';
import { getRegisterLoading } from '../model/selectors/getRegisterLoading/getRegisterLoading';
import { RegisterByEmailThunk } from '../model/services/RegisterByEmailThunk';
import { RegFormValidator } from '../lib/RegFormValidator/RegFormValidator';

interface RegisterProps {
  className?: string;
}

const RegisterForm = ({ className }: RegisterProps) => {
  const dispatch = useAppDispatch();

  const [emailError, setEmailError] = useState<string>();
  const [passwordError, setPasswordError] = useState<string>();
  const [nameError, setNameError] = useState<string>();

  const regData = useSelector(getRegisterData);
  const regError = useSelector(getRegisterError);
  const regLoading = useSelector(getRegisterLoading);

  const setName = useCallback((value: string) => {
    dispatch(RegisterActions.setUsername(value));
  }, []);

  const setEmail = useCallback((value: string) => {
    dispatch(RegisterActions.setEmail(value));
  }, []);

  const setPassword = useCallback((value: string) => {
    dispatch(RegisterActions.setPassword(value));
  }, []);

  const setCode = useCallback((value: string) => {
    dispatch(RegisterActions.setCode(value));
  }, []);

  const submitRegisterForm = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const validFields = RegFormValidator(
        regData.name,
        regData.password,
        regData.email,
      );

      if (
        !validFields.mailValid ||
        !validFields.nameValid ||
        !validFields.passwordValid
      ) {
        if (!validFields.mailValid) {
          setEmailError('Некорректная почта!');
        } else if (validFields.nameValid) {
          setEmailError('');
        }
        if (!validFields.passwordValid) {
          setPasswordError('Пароль не соответствует требованиям!');
        } else if (validFields.passwordValid) {
          setPasswordError('');
        }
        if (!validFields.nameValid) {
          setNameError('Имя должно содержать больше 3-х символов!');
        } else if (validFields.nameValid) {
          setNameError('');
        }
      } else {
        setPasswordError('');
        setNameError('');
        setEmailError('');
        dispatch(
          RegisterByEmailThunk({
            name: regData.name,
            email: regData.email,
            password: regData.password,
            code: regData.code,
          }),
        );
      }
    },
    [dispatch, regData],
  );

  return (
    <form
      className={classNames(cls.RegisterForm, {}, [className])}
      onSubmit={e => submitRegisterForm(e)}
    >
      <InputType1
        type={'text'}
        value={regData.code}
        onChange={e => setCode(e.target.value)}
      />
      <p>{nameError}</p>
      <InputType1
        type={'text'}
        value={regData.name}
        onChange={e => setName(e.target.value)}
      />
      <p>{emailError}</p>
      <InputType1
        type={'text'}
        value={regData.email}
        onChange={e => setEmail(e.target.value)}
      />
      <p>{passwordError}</p>
      <InputType1
        type={'text'}
        value={regData.password}
        onChange={e => setPassword(e.target.value)}
      />
      <ButtonType1 type='submit' text='Регистрация' />
    </form>
  );
};

export default RegisterForm;
