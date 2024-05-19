import React, { useCallback, useState } from 'react';

import cls from './LoginVerifyCodeForm.module.scss';

import InputType1 from 'shared/ui/InputType1/InputType1';
import ButtonType1 from 'shared/ui/ButtonType1/ButtonType1';

import { classNames } from 'shared/lib/classNames/classNames';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getLoginVerifyCodeInputData } from '../model/selectors/getLoginVerifyCodeInputData/getLoginVerifyCodeInputData';
import { getLoginVerifyCodeError } from '../model/selectors/getLoginVerifyCodeError/getLoginVerifyCodeError';
import { getLoginVerifyCodeLoading } from '../model/selectors/getLoginVerifyCodeLoading/getLoginVerifyCodeLoading';
import { getLoginEmail } from 'features/Login/model/selectors/getLoginEmail/getLoginEmail';
import { LoginVerifyCodeActions } from '../model/slices/LoginVerifyCodeSlice';
import { LoginVerifyCodeThunk } from '../model/services/LoginVerifyCodeThunk';

interface LoginVerifyCodeFormProps {
  className?: string;
}

const LoginVerifyCodeForm = ({ className }: LoginVerifyCodeFormProps) => {
  const dispatch = useAppDispatch();

  const [codeError, setCodeError] = useState<string>('');

  const LoginVerifyCodeInput = useSelector(getLoginVerifyCodeInputData);
  const LoginVerifyCodeError = useSelector(getLoginVerifyCodeError);
  const LoginVerifyCodeLogin = useSelector(getLoginVerifyCodeLoading);

  const email = useSelector(getLoginEmail);

  const setCode = useCallback(
    (value: string) => {
      dispatch(LoginVerifyCodeActions.setCode(value));
    },
    [dispatch],
  );

  const submitVerifyCodeForm = (e: React.FormEvent) => {
    e.preventDefault();

    if (LoginVerifyCodeInput.code.length == 6) {
      setCodeError('');
      dispatch(
        LoginVerifyCodeThunk({
          code: LoginVerifyCodeInput?.code,
          email: email,
        }),
      );
    } else {
      setCodeError('Код должен состоять из 6 цифр!');
    }
  };
  return (
    <form
      className={classNames(cls.LoginVerifyCodeForm, {}, [])}
      onSubmit={e => submitVerifyCodeForm(e)}
    >
      <p>{codeError}</p>
      <InputType1
        type={'text'}
        value={LoginVerifyCodeInput?.code}
        onChange={e => setCode(e.target.value)}
      />
      <ButtonType1 type='submit' text='Отправить' />
    </form>
  );
};

export default LoginVerifyCodeForm;
